class Node {
  constructor(this, item) {
    this.data = item;
    this.prev = null;
    this.next = null;
  }

  init(this, item) {
    this.data = item;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedLists {
  init(this, itme) {
    this.nodeCount = 0;
    this.head = new Node(null);
    this.tail = new Node(null);
    this.head.prev = null;
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.tail.next = null;
  }

  traverse(this) {
    let result = [];
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
      result.push(curr.data);
    }
    return result;
  }

  reverse(this) {
    let result = [];
    let curr = this.tail;
    while (curr.prev.prev) {
      curr = curr.prev;
      result.push(curr.data);
    }
    return result;
  }

  insertAfter(this, prev, newNode) {
    let next = prev.next;
    newNode.next = next;
    newNode.prev = prev;
    next.prev = newNode;
    prev.next = newNode;
    this.nodeCount += 1;
    return true;
  }
}
