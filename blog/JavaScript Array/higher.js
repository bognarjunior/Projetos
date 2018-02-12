const { people } = require('./people');

const equals = property => value => obj => obj[property] === value;
const getProperties = properties => obj => properties.reduce((get, item) => {
    get[item] = obj[item];
    return get;
}, {});

const older = property =>  (bigger, obj) => bigger = 
        (bigger.hasOwnProperty(property)) ? 
        (parseInt(obj.property) > parseInt(bigger.property)) ? 
        obj : bigger : obj;

const getNameAge = getProperties(['name', 'age']);
const teamCorinthians = equals('team')('Corinthians');

const person = people.filter(teamCorinthians).map(getNameAge).reduce(older('age'), {});

console.log(person);