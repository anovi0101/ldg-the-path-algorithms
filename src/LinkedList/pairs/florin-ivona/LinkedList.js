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
        return this.length;
    }

    shift() {
        if (!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;

        this.length--;

        return currentHead.value;
    }

    unshift(value) {
        let node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;

        return node.value;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



