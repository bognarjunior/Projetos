// --- Atenção --- //
// --- Comente cada pedaço do código para testar as funções separadamente --- //
function* generator(){
	yield 1;
	yield 2;
	yield 3;
}

const gen = generator();

console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next());

// ----- Comente o código acima ----- //
function* generator(){
	let index = 0;
	while(true)
		yield index++;
}

const gen = generator();

console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
for (let i = 0; i < 10; i++) {
	console.log(gen.next().value);  
} 

// ----- Comente o código acima ----- //
function* executor(i) {
  yield i + i;
  yield i * i;
  yield i + i + 7;
}

function* generator(i){
  yield i;
  yield* executor(i);
}

const gen = generator(3);

console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 
