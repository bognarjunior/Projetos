System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            const stores = ['negociacoes'];
            let connection = null;

            //Variável para armazenar a função close original
            let close = null;

            class ConnectionFactory {
                constructor() {
                    throw new Error('Não é possível criar uma instância desta classe!');
                }

                static getConnection() {
                    return new Promise((resolve, reject) => {

                        //Se uma conexão já foi criada a retorna
                        if (connection) return resolve(connection);

                        const openRequest = indexedDB.open('jscangaceiro', 2);

                        openRequest.onupgradeneeded = e => {
                            ConnectionFactory._createStores(e.target.result);
                        };

                        openRequest.onsuccess = e => {
                            //Só será executado na primeira vez que a conexão for criada
                            connection = e.target.result;

                            //Armazena a close original
                            close = connection.close.bind(connection);

                            connection.close = () => {
                                throw new Error('Você não pode fechar diretamente a conexão');
                            };

                            resolve(e.target.result);
                        };

                        openRequest.onerror = e => {
                            console.log(e.target.result);
                            reject(e.target.result);
                        };
                    });
                }

                static _createStores(connection) {
                    stores.forEach(store => {
                        if (connection.objectStoreNames.contains(store)) connection.deleteObjectStore(store);

                        connection.createObjectStore(store, { autoIncrement: true });
                    });
                }

                static closeConnection() {
                    if (connection) {
                        close();
                    }
                }
            }

            _export('ConnectionFactory', ConnectionFactory);
        }
    };
});
//# sourceMappingURL=ConnectionFactory.js.map