function escopoVar() {
    var valor = 10;
    if (true) {
        var valor = 20;
    }

    console.log('Retorno var: ', valor);
}

escopoVar();

/* **************************************** */
(() => {
    let valor = 10;
    if (true) {
        let valor = 20;
    }

    console.log('Retorno let: ', valor);
})();

/* ****************************************** */
const valor = 10;
console.log('Retorno const: ', valor);
valor = 20;
console.log('Retorno segundo const: ', valor);