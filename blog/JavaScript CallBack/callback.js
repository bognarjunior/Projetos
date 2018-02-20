let sum = (a, b, callback) => callback(a + b);
let msg = x => console.log('A soma é: ', x );

sum(2, 5, msg);