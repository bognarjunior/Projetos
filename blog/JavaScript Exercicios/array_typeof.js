var ar = [1,2,[3,[4,5,[6,7]]],8,9];

saida = [];

for (var i = 0; i < ar.length; i++) {
    if (typeof(ar[i]) != "number") {
        returnNumber(ar[i]);
    } else {
        saida.push(ar[i]);
    }
}

function returnNumber(arg) {
    for (var i = 0; i < arg.length; i++) {
        if (typeof(arg[i]) != "number") {
            returnNumber(arg[i]);
        } else {
            saida.push(arg[i]);
        }
    }
}
console.log("saida", saida);