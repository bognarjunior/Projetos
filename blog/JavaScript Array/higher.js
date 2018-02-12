const { people } = require('./people');

const equals = property => value => obj => obj[property] === value;
const getProperties = properties => obj => properties.reduce((get, item) => {
    get[item] = obj[item];
    return get;
}, {});

const older = property =>  (bigger, person) => bigger = 
        (bigger.hasOwnProperty(property)) ? 
        (parseInt(person.property) > parseInt(bigger.property)) ? 
        person : bigger : person;

const getNameAge = getProperties(['name', 'age']);
const teamCorinthians = equals('team')('Corinthians');

const person = people.filter(teamCorinthians).map(getNameAge).reduce(older('age'), {});

console.log(person);