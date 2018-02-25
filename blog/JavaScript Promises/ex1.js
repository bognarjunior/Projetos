let promise = new Promise( (resolve, reject) => resolve(1));

promise.then(val =>  {
    console.log(val);
    return val + 2;
})
.then( val => {
    console.log(val);
    return val + 2;
})
.then( val => console.log('Passou por todas as etapas: ', val))
.catch( err => console.log('Foi rejeitada: ', err));