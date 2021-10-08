const LinkedList = require('../../../../src/LinkedList/pairs/florin-ivona/LinkedList')

describe('LinkedList', () => {
    test('can create a new list', () => {
        const list = new LinkedList()

        expect(list).toBeDefined()
    })
    test('push an element to the end of the list', () => {
        const list = new LinkedList()
        list.push(19)
        expect(list.push()).toBe(19)
    })
})
