//Descomente cada trecho para testar separado.

/* const obj = {name: 'José Roberto', lastName: 'Bognar Junior'};
const {name, lastName} = obj;

console.log(name); 
console.log(lastName);  */

//=================================================

/* const objeto = {
    Pega: 'Valor será atribuído',
    PegaTambem: 'Também será atribuído um valor',
    Ignora: 'Não será atribuído valor',
    PegaMaisUm: 'Depois de pular um esse será atribuido'
}

let Pega, PegaTambem, PegaMaisUm;

({Pega, PegaTambem, PegaMaisUm} = objeto);

console.log(Pega);
console.log(PegaTambem);
console.log(PegaMaisUm); */

//=================================================

/* const obj = {
    name: 'Bognar Junior',
    age: 34
}

const {name: n, age: a} = obj;

console.log(n);
console.log(a); */

//=================================================

let key = "name";
let { [key]: teste } = { name: "Bognar" };

console.log(teste);