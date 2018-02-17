const compose = (...functions) => ini => functions.reduceRight((value, func) => func(value), ini);

const pipe = (...functions) => ini => functions.reduce((value, func) => func(value), ini);

module.exports = {
    compose,
    pipe
}