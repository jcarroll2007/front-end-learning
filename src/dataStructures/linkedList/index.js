// const LENGHT = createSYm

export default class LinkedList {
  constructor(head=null) {
    this.head = null
    this.unshift(head)
  }

  /**
   * Remove item from the beginning of the linked list
   * @returns {*} the value of the node removed
   */
  shift() {
    if (!this.head) return

    // this.head.next could be null, but that's fine. If it is, we want
    // this.head to be null anyway
    const removedNode = this.head
    this.head = this.head.next
    return removedNode.val
  }

  /**
   * Add item to the beginning of the linked-list
   * @param {*} val - value to be stored in the node
   */
  unshift(val) {
    if (!val) return
    const node = {
      val,
      next: null
    }
    if (this.head) node.next = this.head
    this.head = node
    return this
    // add an item to the beginning of the linked list
  }

  insert(i, val) {
    // insert a value into the linked list
  }

  /**
   * Add something to the end of the linked list
   * @param {*} val - the value of the new node
   */
  push(val) {
    if (!this.head) return this.unshift(val)

    let currentNode = this.head
    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }
    currentNode.next = {
      val,
      next: null
    }
  }

  pop() {
    if (!this.head) return
    if (!this.head.next) return this.shift()
    // iterate over through the list until you find the element whoes next.next is null,
    // then remove that element.next reference
    let previousNode = this.head
    let currentNode = this.head.next
    while (currentNode.next != null) {
      previousNode = currentNode
      currentNode = currentNode.next
    }
    previousNode.next = null
    return currentNode.val
  }

  get length() {
    // return the length of the linked list
  }

  toString() {

  }
}
