const { people } = require('./people');

const getNameAge = person => ({ name: person.name, age: person.age });
const peopleNameAge = people.map(getNameAge);

console.log(peopleNameAge);