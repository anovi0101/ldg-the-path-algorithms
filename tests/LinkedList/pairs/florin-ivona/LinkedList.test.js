const LinkedList = require('../../../../src/LinkedList/pairs/florin-ivona/LinkedList')

describe('LinkedList', () => {
    test('can create a new list', () => {
        const list = new LinkedList()

        expect(list).toBeDefined()
    })
    test('push an element', () => {
        const list = new LinkedList()
        list.push(19)
        expect(list.length === 1);
    })
    test('push an element', () => {
        const list = new LinkedList()
        list.push(2)
        expect(list.length === 2);
    })
    test('push an element', () => {
        const list = new LinkedList()
        list.push(19)
        expect(list.length === 1);
    })
    test('count an empty list', () => {
        const list = new LinkedList()
        expect(list.count()).toBe(0);
    })
    test('count a list with items', () => {
        const list = new LinkedList()
        list.push(2);
        list.push(4);
        expect(list.count()).toBe(2);
    })
    test('get first element', () => {
        const list = new LinkedList();
        list.push(12);
        expect(list.shift()).toBe(12);
    })
    test('get first element', () => {
        const list = new LinkedList();
        expect(list.shift()).toBe(undefined);
    })
})