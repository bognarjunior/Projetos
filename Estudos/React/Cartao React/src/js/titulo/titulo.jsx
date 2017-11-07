import React from 'react';

class Titulo extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {hora: new Date()};
    }

    componentDidMount() {
        this.horaID = setInterval(
            ()=> this.atualizarSegundos(),
            1000
        );
    }

    atualizarSegundos() {
        this.setState({hora: new Date()});
    }

    componentWillUnMount() {
        clearInterval(this.horaID);
    }

    render() {
        return (
            <h1>
                Curso de React com Gulp
            </h1>
        );
    }
}

export default Titulo;