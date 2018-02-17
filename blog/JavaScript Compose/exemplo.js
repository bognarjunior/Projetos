const { compose, pipe } = require('./compose');

let x = 3;

let a = x => console.log('O valor final é: ', x);

let b = x => x * x;

let c = x => x + x;

let d = x => x + 2;

let d1 = d(x);
let c1 = c(d1);
let b1 = b(c1);
let a1 = a(b1);

let a2 = a(b(c(d(x))));

let resultCompose = compose(a,b,c,d)(x);
let resultPipe = a(pipe(b,c,d)(x));