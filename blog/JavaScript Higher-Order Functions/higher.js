const twice = (f, v) => f( f(v) );
const add = v => n => n + v;
const add3 = add(3);
console.log(twice(add3, 7));

const sum = (x, y) => x + y;
const sub = (x, y) => x - y;

const calculate = (f, x, y) => console.log(f(x, y));

calculate(sum, 10, 2); 
calculate(sub, 10, 3); 