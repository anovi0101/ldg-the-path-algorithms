module.exports = class LinkedList {
    constructor() {
        this.tail = null
        this.head = null
        this.length = 0
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
