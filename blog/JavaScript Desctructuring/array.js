//Descomente cada trecho para testar separado.

/* const array = ['A', 'B', 'C', 'D', 'E'];
const [a, b, c, d, e] = array;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
 */

//=================================================

/* const array = ['A', 'B', 'C', 'D', 'E'];
const [a, b, ...c] = array;

console.log(a);
console.log(b);
console.log(c); */

//=================================================

/* const [a='Teste', b=a] = [];     */
/* const [a = 'Teste', b = a] = ['Olá Mundo!']; */   
/* const [a = 'Teste', b = a] = ['Olá', 'Mundo!']; */

/* let [a, b,] = ['Primeiro', 'Segundo'];

console.log('Antes: ', a);
console.log('Antes: ', b);

//==================================================

[a,b] = [b,a];

console.log('Depois: ', a);
console.log('Depois: ', b); */

//=================================================
//O código abaixo dará erro

const [a = b, b = 'Teste'] = []; 

console.log(a);
console.log(b);
