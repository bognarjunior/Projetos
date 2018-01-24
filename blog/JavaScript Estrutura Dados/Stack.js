/* var pilha = [];
pilha.push(1);
pilha.push(2);
pilha.push(3);

console.log(pilha);

pilha.pop();
pilha.push(4);

console.log(pilha);

pilha.pop();
pilha.push(5);
pilha.pop();

console.log(pilha); */

function Stack(){
    this.stack = [];
 
    this.insertStack = param => this.stack[this.stack.length] = param;
 
    this.removeStack = () => {
        if(this.stack.length > 0){
            let obj = this.stack[this.stack.length - 1];
            this.stack.splice(this.stack.length - 1,1);
            return obj;    
        }else{
            return "Sem elementos na pilha";
        }
    }
}

let s = new Stack();
s.insertStack(1);
s.insertStack(2);
s.insertStack(3);

console.log(s.stack);

s.insertStack(4);
s.insertStack(5);
s.insertStack(6);

s.removeStack();
s.removeStack();

console.log(s.stack);

console.log(s.removeStack());
console.log(s.removeStack());
console.log(s.removeStack());
console.log(s.removeStack());
console.log(s.removeStack());
console.log(s.removeStack());
console.log(s.removeStack());
console.log(s.removeStack());
console.log(s.removeStack());