class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
            ++this.size
            return;
        }else{
                let temp = this.first;
                this.first = newNode;
                this.first.next = temp;
                ++this.size;
                return;
        }
    }


    pop() {

        if(this.first === null) return console.log("Nothing is there to be popped");
        if(this.first === this.last) return null;
        let temp = this.first;
        this.first = temp.next;
        console.log("Popped this value: ",temp.value);
        --this.size  ;
        return;

    }

    getStack() {
        if(!this.first)return console.log("No values are in the stack");
        
        if(this.first !== null){
            if(this.first === this.last){
                console.log(this.first.value);
                return;
            }
            let current = this.first;
            // console.log(current.next.value);
            while(current != null){
                console.log(current.value);
                current = current.next;
            }
        }
        return;
        
    }

    checkStack(val){
        if(this.first === null) return console.log("Stack is empty");
        if(this.first === this.last && this.first.value === val) return console.log("Value found");
        let current = this.first;
        while(current !== null){
            if(current.value === val){
                return console.log("Value found");                
            } 
            current = current.next
        }

        return console.log("value not found")
    }
}

const stck = new Stack();


stck.push(4);
stck.push(3);
stck.push(2);
stck.push(1);
stck.getStack();
stck.pop();
stck.pop();
stck.getStack();

stck.checkStack(4);
stck.checkStack(8);