import React from 'react';
import axios from 'axios';

import Cartao from './cartao';
import Busca from '../busca/busca';

class ListaCartao extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cliques: 0, 
            busca: '', 
            dados: [], 
            servidor: []
        };

        this.addClique = this.addClique.bind(this);
        this.atualizaBusca = this.atualizaBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    addClique() {
        this.setState((prevState)=>({
          cliques: prevState.cliques + 1
        }));
    }

    atualizaBusca(evento) {
        this.setState({busca: evento.target.value});

        if(evento.target.value == ""){
            this.setState({dados: this.state.servidor});
        }
    }

    onSubmit(evento) {

        let busca = this.state.busca;
        let dados = this.state.servidor;
        let novaLista = dados.filter(function(item){
        
            if(item.titulo.toUpperCase().indexOf(busca.toUpperCase()) > -1
              || item.descricao.toUpperCase().indexOf(busca.toUpperCase()) > -1
              || item.detalhe.toUpperCase().indexOf(busca.toUpperCase()) > -1){
                return item;
            }
        });

        this.setState({dados: novaLista});

        evento.preventDefault();
    }

    componentDidMount() {
        let self = this;
        axios.get('servidor.php',{
            params: {
              'dados': 1
            }
        })
        .then(function(response) {
            self.setState({
                dados: response.data,
                servidor: response.data
            });
        })
        .catch(function (error) {
            console.log(error);
        });;
    }

    render() {
        let noticias = this.state.dados;
        let aux =[];
        let novaLista = [];
        let self = this;

        for(let k = 0; k < noticias.length; k++ ) {

            aux.push(noticias[k]);

            if(aux.length == this.props.qtdLinha) {
                novaLista.push(aux);
                aux = [];

            } else if(k == noticias.length - 1) {
                novaLista.push(aux);
            }
        }

        let tamanhoCol = "col m" + this.props.tamanhoCol;

        let listaCartoes = function(grupo, self) {
            return grupo.map(function(item, index) {
                return (
                    <div key={index} className={tamanhoCol}>
                        <Cartao dados={item} addClique={self.addClique} />
                    </div>
                );
            });
        };

        let linha = novaLista.map(function(grupo, index){
            return (
                <div key={index} className="row">
                    {listaCartoes(grupo, self)}
                </ div>
            );
        });

        return (
            <div>
                <div className="row">
                    <Busca atualizaBusca={this.atualizaBusca} onSubmit={this.onSubmit} busca={this.state.busca} />
                </div>
                <p>Quantidade de cliques: {this.state.cliques}</p>
                    {linha}
            </div>
        );
    }
}

export default ListaCartao;