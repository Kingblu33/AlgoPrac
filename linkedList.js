class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}



class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    push(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // console.log(this.tail);
        return this.tail.value;
    }
    //removes from the back of the linkedList
    pop(){
        if(!this.head) return null;
        if(this.head === this.tail) {
            const poppedValue = this.head.value;
            this.head = null;
            this.tail = null;
            return poppedValue;
        }
        let prev = null;
        let current = this.head;
        while(current.next !== null){
            prev = current;
            current = current.next;
        }
        
        this.tail = prev;
        this.tail.next = null;
        return current.value;
    }
    // method should take a value and assign it to the head of the linked list
    unshift(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            let temp = this.head;
            this.head = newNode;
            newNode.next= temp;
        }
        return;
    }
    // Method should remove the head of the linked list
    shift(){
        if(!this.head) return null;
        this.head = this.head.next
        return;
    }

    printList(){
        if(!this.head) return null;
        let current = this.head;
        while(current !== null){
            console.log(current.value);
            current = current.next;
        }
    }
    

    setValueAtIndex(value, index){
        let count = 0;
        let newNode = new Node(value)
        if(index === 0){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let prev = null;
        let current = this.head;
        while(current !== null){
            if(count === index){
                prev.next = newNode;
                newNode.next = current;
                return;
            }
            ++count;
            prev = current;
            current = current.next;
        }
    }

    reverse() {
        if (!this.head) return null;
        let prev = null;
        let current = this.head;
        // let currentBeforePrev
        while (current !== null) {
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
    
        this.head = prev;
        this.tail = this.head;

        while(this.tail.next !== null){
            this.tail = this.tail.next;
        }
        return;
    }
        
    
}
//  c    
//  1 -> 2 -> 3 -> 4

// null <- 1
//



const list = new LinkedList();


// list.push(1)
// list.push(2)
// list.push(3)
// list.push(5)
// list.pop(); 
// list.printList();
// list.pop();
// list.pop();

// list.printList();

list.push(2)
list.push(3) 
list.push(10)
list.push(15)
list.push(13)
list.printList();
console.log("should reverse")
list.reverse();
list.printList();


console.log(list.head,list.tail)
