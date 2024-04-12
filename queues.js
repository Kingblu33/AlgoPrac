class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (this.first === null && this.last === null) {
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }

        ++this.size;
        return;
    }
    dequeue() {
        if (this.first === null && this.last === null) {
            console.log("Queue is empty, cannot dequeue");
            return;
        } else if (this.first === this.last) {
            console.log("Removing:", this.first.value);
            this.first = null;
            this.last = null;
            console.log("Queue is empty now");
        } else {
            console.log("Removing:", this.first.value);
            this.first = this.first.next;
        }
        return;
    }
    

    getQueue(){ 
        // console.log("getting into queue")
        if(this.first !== null){
            let current = this.first;
            // console.log(this.first)
            while(current !== null){
                console.log("Values from queue", current.value);
                current = current.next;
            }
        }
    }
}

const newQueue = new Queue();

newQueue.enqueue(4);
newQueue.enqueue(5);
newQueue.enqueue(6);

newQueue.getQueue();

newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();
newQueue.dequeue();