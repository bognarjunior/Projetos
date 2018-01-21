function soma(a, b) {
    return a + b;
}
c = soma(3, 2);
console.log(c);

soma1 = (a, b) => {
    return a + b;
};
c = soma1( 4, 3);
console.log(c);

soma2 = (a, b) => a + b;
c = soma2(4, 5);
console.log(c);

soma3 = a => a + 7;
c = soma3(3);
console.log(c);

(() => console.log("Teste"))();

let arr = [
    "JavaScript",
    "PHP",
    "HTML5",
    "CSS"
];
  
let result = arr.map( s => s.length );
  
console.log(result);

function Contador() {
    this.numero = 0;
    setInterval(function contar() {
            this.numero++;
            console.log(this.numero);
        },1000);
    }
    
let Contador = new Contador();

function Contador() {
    let self = this; 
    self.numero = 0;
  
    setInterval(function contar() {
        this.numero++;
        console.log(this.numero);
    }, 1000);
}
let p = new Contador();

function Contador(){
    this.numero = 0;
    setInterval(() => {
        this.numero++;
        console.log(this.numero);
    }, 1000);
}
  
let contador = new Contador();
