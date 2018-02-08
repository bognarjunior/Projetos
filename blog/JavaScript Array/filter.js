const { people } = require('./people');

const teamCorinthians = item => item.team === 'Corinthians';
const peopleCorinthians = people.filter(teamCorinthians);

console.log(peopleCorinthians);