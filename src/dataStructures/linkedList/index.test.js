import LinkedList from './index'


describe('LinkedList', () => {
  it('should be defined', () => {
    expect(LinkedList).toBeDefined()
  })

  let list
  beforeEach(() => {
    list = new LinkedList(4)
  })

  it('should set head in constructor', () => {
    expect(list.head).toEqual({
      val: 4,
      next: null
    })
  })

  it('should set `head` to null', () => {
    const emptyLinkList = new LinkedList()
    expect(emptyLinkList.head).toEqual(null)
  })

  describe('shift', () => {
    describe('if `head.next` is null', () => {
      it('should remove the single item in the list and set head to null', () => {
        list.shift()
        expect(list.head).toEqual(null)
      })
    })
    describe('if `head.next` is not null', () => {
      beforeEach(() => {
        list.unshift(5)
      })
      it('should remove the first item, return it, and update head', () => {
        const removedVal = list.shift()
        expect(removedVal).toEqual(5)
        expect(list.head).toEqual({
          val: 4,
          next: null
        })
      })
    })
  })

  describe('unshift', () => {
    it('should add a new item to the end of the list', () => {
      list.unshift(5)
      expect(list.head).toEqual({
        val: 5,
        next: list.head.next
      })
    })

    it('should return this so chaining is possible', () => {
      list.unshift(5).unshift(6)
      expect(list.head).toEqual({
        val: 6,
        next: {
          val: 5,
          next: list.head.next.next
        }
      })

    })
  })

  describe('push', () => {
    describe('if list is empty', () => {
      it('should add the node as the head', () => {
        const emptyLinkList = new LinkedList()
        emptyLinkList.push(5)
        expect(emptyLinkList.head).toEqual({
          val: 5,
          next: null
        })
      })
    })
    describe('if list not empty', () => {
      it('should add to the last node', () => {
        list.push(5)
        expect(list.head).toEqual({
          val: 4,
          next: {
            val: 5,
            next: null
          }
        })
      })
    })
  })

  describe('pop', () => {
    describe('if list contains one item', () => {
      it('should remove the item, return it, and set head to null', () => {
        const poppedVal = list.pop()
        expect(list.head).toEqual(null)
        expect(poppedVal).toEqual(4)
      })
    })
    describe('if list has more than one item', () => {
      it('should remove the last item and return it', () => {
        list.unshift(5)
        list.unshift(6)
        const poppedVal = list.pop()
        expect(poppedVal).toEqual(4)
        expect(list.head).toEqual({
          val: 6,
          next: {
            val: 5,
            next: null
          }
        })
      })
    })
  })
})
