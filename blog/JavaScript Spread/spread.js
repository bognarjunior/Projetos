let a = [1, 2, 3, 4];
let b = [5, 6, 7];

a.push(b);
console.log(a);

let c = [1, 2, 3, 4];
let d = [5, 6, 7];

c.push(...d);
console.log(c);

let data = [{
    a: 1,
    b: 2,
    c: 3
}, 
{
    a: 'a',
    b: 'b',
    c: 'c'
}]

let teste = [
    ...data
];

teste.map(item => console.log(item));
