var pessoa = require('./commons/pessoa');
var soma = require('./commons/soma');
var imposto = require('./commons/calculo');
bognar = pessoa();
console.log(JSON.stringify(bognar));
console.log(soma(2, 2));
console.log( 'valor do produto com imposto:  ' + imposto.adicionar(3));
console.log( 'valor do imposto:  ' + imposto.valor(3));
console.log( 'taxa do imposto:  ' + imposto.taxa);