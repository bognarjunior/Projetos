class NegociacaoService {
    obterNegociacoesDaSemana(cb) {
        //Cria uma instância 
        const xhr = new XMLHttpRequest();

        //Abre uma conexão com o servidor
        xhr.open('GET', 'negociacoes/semana');

        xhr.onreadystatechange = () => {

            //Indica que a requisição foi concluída com uma resposta pronta
            if(xhr.readyState == 4) {

                //Indica que não deu erro
                if(xhr.status == 200) {
                    //Converte cada objeto para uma instância de Negociação
                    const negociacoes = JSON.parse(xhr.responseText)
                        .map( objeto => new Negociacao(
                            new Date(objeto.data), objeto.quantidade, objeto.valor
                        ));
                    cb(null, negociacoes);
                } else {
                    cb('Não foi possível obter as negociações da semana!', null);
                }
            }
        };

        //Executa a requisição configurada
        xhr.send();
    }
}