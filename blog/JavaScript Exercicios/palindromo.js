function isPalindromo(l){
	x = l.split("").reverse().join("");
    return (x == l) ? true : false; 
}

console.log(isPalindromo('casa'));
console.log(isPalindromo('oborobo'));
console.log(isPalindromo('asa'));
console.log(isPalindromo('babab'));
console.log(isPalindromo('Frango'));