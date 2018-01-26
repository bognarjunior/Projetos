const a = [2, 3, 1, 0, 5];
const b = [1, 2, 3, 4, 5];

const tem = [];
const all = b;
a.forEach(function(item) {
    if(b.indexOf(item) != -1){
        tem.push(item);
    } else {
        all.push(item);
    }
});

console.log(tem);
console.log(all);
/* ------------------------------------------------- */

const a = [2, 3, 1, 0, 5, 23, 10];
const b = [1, 2, 3, 4, 5, 13, 10, 8];

const inter = [], union = b, diff = [];

a.map((item) => {
    if(b.indexOf(item) != -1){
        inter.push(item);
    } else {
        union.push(item);
    }
});

b.map((item) => {
    if(a.indexOf(item) == -1) {
        diff.push(item);
    }
});

inter.sort((a, b) => a - b);
union.sort((a, b) => a - b);
diff.sort((a, b) => a - b);

console.log(inter);
console.log(union);
console.log(diff);