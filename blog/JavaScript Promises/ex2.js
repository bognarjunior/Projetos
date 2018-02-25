let time = (x, y, fn) => setTimeout(() => { fn(x) }, y);

let pA = new Promise((resolve, reject) => time('A', 500, resolve));
let pB = new Promise((resolve, reject) => time('B', 300, resolve));
let pC = new Promise((resolve, reject) => time('C', 800, resolve));
let pD = new Promise((resolve, reject) => time('D', 400, resolve));
let pE = new Promise((resolve, reject) => time('E', 1000, resolve));

Promise.race([ pA, pB, pC, pD, pE])
    .then(result => {
        console.log('Resultado da promise.race: ', result);
    })
    .catch( err => {
        console.warn('Failed: ', err);
    });


Promise.all([ pA, pB, pC, pD, pE])
    .then(result => {
        console.log('Resultado da promise.all: ', result);
    })
    .catch( err => {
        console.warn('Failed: ', err);
    });
