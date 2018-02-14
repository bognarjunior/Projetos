/* function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));


sum = (a, b) => a + b;
console.log(sum(3, 5));

add = a => b => a + b;
sum = add(3);
console.log(sum(5));

greeting = (salute, name) => salute + ' ' + name;
console.log(greeting('Hello','World!'));

greeting = salute => name => salute + ' ' + name;
console.log(greeting('Hello')('World!'));

greeting = salute => name => salute + ' ' + name;
salutation = greeting('Hello')
console.log(salutation('World!')); */

const twice = f => v => f( f(v) );
const add = v => n => n + v;
const add3 = add(3);
const result = twice(add3); 
console.log(result(7));