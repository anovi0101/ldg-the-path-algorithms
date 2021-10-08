module.exports = class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;

        return node;
    }

    count(){
        let listSize = 0;
        let node = this.head;
        while(node){
            listSize++;
            node=node.next;
        }
        return listSize;
    }

    shift() {
        if (!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;

        this.length--;

        return currentHead;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



