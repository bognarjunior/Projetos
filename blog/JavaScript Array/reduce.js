const { people } = require('./people');

const older = (bigger, person) =>bigger = (bigger.hasOwnProperty('age')) ? (parseInt(person.age) > parseInt(bigger.age)) ? person : bigger : person;
const peopleOlder = people.reduce(older, {});

console.log(peopleOlder);
