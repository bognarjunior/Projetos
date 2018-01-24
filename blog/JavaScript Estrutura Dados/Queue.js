/* var fila = [];
fila.push(1);
fila.push(2);
fila.push(3);

console.log(fila);

fila.shift();
fila.push(4);

console.log(fila);

fila.shift();
fila.shift();

console.log(fila); */

function Queue(){
    this.queue = [];
 
    this.insertQueue = param => this.queue[this.queue.length] = param;
    
    this.removeQueue = () => {
        if (this.queue.length > 0) {
            let obj = this.queue[0];
            this.queue.splice(0,1);
            return obj;    
        }else{
            return "Sem elementos na fila";
        }
    }
}

let q = new Queue();
q.insertQueue(1);
q.insertQueue(2);
q.insertQueue(3);

console.log(q.queue);

q.insertQueue(4);
q.insertQueue(5);
q.insertQueue(6);

q.removeQueue();
q.removeQueue();

console.log(q.queue);

console.log(q.removeQueue());
console.log(q.removeQueue());
console.log(q.removeQueue());
console.log(q.removeQueue());
console.log(q.removeQueue());
console.log(q.removeQueue());
console.log(q.removeQueue());
console.log(q.removeQueue());
console.log(q.removeQueue());