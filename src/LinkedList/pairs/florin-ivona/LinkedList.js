module.exports = class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        const node = new Node(value)

        if (!this.head) {
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node
            this.tail = node
        }

        this.length++

        return node
    }

    count() {
        return this.length
    }

    get(index) {
        if (index < 0 || index >= this.length) return null

        let counter = 0
        let current = this.head

        while (counter !== index) {
            current = current.next
            current++
        }

        return current.value
    }

    shift() {
        if (!this.head) return undefined

        let currentHead = this.head
        this.head = currentHead.next

        this.length--

        return currentHead.value
    }

    unshift(value) {
        let node = new Node(value)

        if (!this.head) {
            this.head = node
            this.tail = this.head
        } else {
            node.next = this.head
            this.head = node
        }

        this.length++

        return node.value
    }

    pop() {
        if (!this.head) {
            return undefined
        }
        let currentElement = this.head
        let newTail = currentElement
        while (currentElement.next) {
            newTail = currentElement
            currentElement = currentElement.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        return currentElement.value
    }

    delete(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }
        if (index === 0) {
            return this.shift()
        }
        if (index === this.length - 1) {
            return this.pop()
        }

        const preNodeToRemove = this.get(index - 1)
        const nodeToRemove = preNodeToRemove.next
        preNodeToRemove.next = nodeToRemove.next

        this.length--

        return nodeToRemove
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
