class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Bts {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        const searchTree = (node) => {
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                    return;
                }
                searchTree(node.left);
            } else if (value > node.value) {
                if (!node.right) {
                    node.right = newNode;
                    return;
                }
                searchTree(node.right);
            } else {
                return null; 
            }
        };

        searchTree(current);
    }
    findValue(value){
        if(!this.root) return null;
        const queue = [this.root];

        while(queue.length > 0){
            const current = queue.shift();
            if(current){
                if(current.value === value){
                    return true;
                }else{
                    if(current.left !== null) queue.push(current.left)
                    if(current.right !== null) queue.push(current.right)
                }
            }
            
        }
        return false;
    }

    printValues() {
        const queue = [this.root];
        
        while (queue.length > 0) {
            const current = queue.shift();
            if (current) {
                console.log(current.value);
                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);
            }
        }
    }
}

const newBTS = new Bts();

newBTS.insert(1);
newBTS.insert(2);
newBTS.insert(3);
newBTS.insert(5);
newBTS.insert(10);
newBTS.insert(8);

const result  = newBTS.findValue(20);
console.log("Is the value in the btws? :",result)
newBTS.printValues();
