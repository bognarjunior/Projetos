let cont = 0;

function add() {
    return ++cont;
}

function decrement() {
    return --cont;
}

console.log(add());
console.log(add());
console.log(add());
console.log(decrement());
console.log(decrement());
console.log(add());
console.log(decrement());
console.log(add());
console.log(decrement());

function getDate() {
    return new Date();
}

console.log(getDate());