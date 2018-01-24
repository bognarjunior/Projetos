System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            class HttpService {
                get(url) {
                    return new Promise((resolve, reject) => {

                        //Cria uma instância 
                        const xhr = new XMLHttpRequest();

                        //Abre uma conexão com o servidor
                        xhr.open('GET', url);

                        xhr.onreadystatechange = () => {

                            //Indica que a requisição foi concluída com uma resposta pronta
                            if (xhr.readyState == 4) {

                                //Indica que não deu erro
                                if (xhr.status == 200) {
                                    resolve(JSON.parse(xhr.responseText));
                                } else {
                                    reject(xhr.responseText);
                                }
                            }
                        };

                        //Executa a requisição configurada
                        xhr.send();
                    });
                }
            }

            _export('HttpService', HttpService);
        }
    };
});
//# sourceMappingURL=HttpService.js.map