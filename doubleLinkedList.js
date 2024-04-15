class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class doubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //this should push to the tail of the list
    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.tail = newNode;
            this.head = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        ++this.length;
        return ;
    }
    //this should remove the tail of the list
    pop(){
        if(!this.head){
            return null;
        }else if(this.head === this.tail){
            this.head = null;
            this.tail = null
            return this;
        }else{
            let temp = this.tail.prev;
            this.tail = temp;
            this.tail.next = null;
        }
        --this.length;
        return;
    }
    //Method should remove the head from the list;
    shift(){
        if(!this.head){
            return null;
        }else if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return "removed head no other values remaining"
        }else{
            let temp = this.head.next;
            this.head = temp;
            this.head.prev = null;
        }
        --this.length;
        return
    }
    //This method should take a value and assign it to the head of the list
    unshift(value){
        if(!this.head){
            console.log("List is empty just using push lets go")
            this.push(value);
        }else{
            let newNode = new Node(value);
            let temp = this.head;
            this.head = newNode;
            this.head.next = temp;
            temp.prev = this.head;
            // console.log(temp)
        }
        ++this.length
        return;
    }
    //this method should provide the value stored at the index
    get(index){
        if(!this.head) return "There is nothing in the list";
        if(index > this.length || index < 0) return "out of scope";
        if(index === this.length) return this.tail;

        let count = 0;
        let current = this.head;

        while(current !== null){
            if(index === count) return current.value;
            current = current.next
            count ++;   
        }
    }

    insert(index,value){
        if(!this.head) return "There is nothing in the list";
        if(index > this.length || index < 0) return "out of scope";
        if(index === this.length){
            console.log("Calling push to handle this");
            this.push(value)
        }
        else if(index === 0){
            console.log("Letting unshift take care of this")
            this.unshift(value);
        }
        else{
            let current = this.head;
            let count = 0;
            let newNode = new Node(value);

            while(current !== null){
                if(index === count){
                    let previousValue = current.prev;
                    previousValue.next = newNode;
                    newNode.next = current;
                    current.prev = newNode;
                    newNode.prev = previousValue ;
                    ++this.length
                    return;
                }

                current = current.next;
                count ++;
            }
        }

    }

    //set just sets the value at the index;
    set(index,value){
        if(!this.head) return "There is nothing in the list";
        if(index > this.length || index < 0) return "out of scope";
        if(index === this.length){
            console.log("Changing tail value from ",this.tail.value," To ",value);
            this.tail.value = value;
            return this.tail;
        }else{
            let current = this.head;
            let count = 0;
            while(current !== null){
                if(index === count){
                    current.value = value;
                    return;
                }

                current = current.next;
                count ++;
            }            
        }
    }
    printList(){
        if(!this.head){
            console.log("There is nothing to return");
            return
        } else if(this.length === 1){
            console.log(this.head.value)
        }
        else{
            let current = this.head;

            while(current !== null){
                console.log(current.value);
                current = current.next;
            }
        }
    }


}


const newList = new doubleLinkedList();

newList.push(2);
newList.push(11);
newList.push(13);
newList.push(15);
newList.push(5);


// console.log(newList.insert(20,3));
newList.insert(3,20)
newList.set(6,30)
newList.printList();




