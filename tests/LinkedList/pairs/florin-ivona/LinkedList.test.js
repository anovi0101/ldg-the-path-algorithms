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
        list.push(8);
        list.push(12);
        expect(list.shift()).toBe(8);
        expect(list.shift()).toBe(12);
    })
    test('get first element', () => {
        const list = new LinkedList();
        expect(list.shift()).toBe(undefined);
    })
    test('adds elements at the start of the list', () => {
        const list = new LinkedList();
        list.unshift(13);
        list.unshift(9);
        expect(list.head.value).toBe(9);
    })
    test('pop the last element from the list', () => {
        const list = new LinkedList();
        list.push(2);
        expect(list.pop()).toBe(2);
    })
    test('pop the last element from the list', () => {
        const list = new LinkedList();
        list.push(1);
        list.push(17);
        expect(list.pop()).toBe(17);
    })
    test('get an element from the list', () => {
        const list = new LinkedList();
        list.push(1);
        list.push(7);
        expect(list.get(0)).toBe(1);
    })
    test('get null when getting non-existing element from the list', () => {
        const list = new LinkedList();
        list.push(1);
        list.push(7);
        list.push(15);
        expect(list.get(10)).toBe(null);
    })
})