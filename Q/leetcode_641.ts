class ListNode {
  public right: ListNode;
  public left: ListNode;
  constructor(public val: number | null) {
    this.val = val;
  }
}

class MyCircularDeque {
  private head: ListNode;
  private tail: ListNode;
  private k = 0;
  private len = 0;

  constructor(k: number) {
    this.head = new ListNode(null);
    this.tail = new ListNode(null);
    this.k = k;
    this.len = 0;
    this.head.right = this.tail;
    this.tail.left = this.head;
  }

  // 복잡해 보이지만 사실 관계를 정리하는 것에 가까움.
  // 얘가 새로 들어왔으니까 자리 사이 벌려주고 그러면 연결을 여기는 이러헥 저기는 요렇게.
  private add(node: ListNode, newNode: ListNode) {
    // 이중 연결 리스트의 노드에 신규 노드를 삽입하는 과정
    const n = node.right; // 1. node 의 right 를 기억
    node.right = newNode; // 2. node 의 right 에 newNode 를 연결
    newNode.left = node; // 3. newNode 의 left 에 node 를 연결
    newNode.right = n; // 4. newNode 의 right 는 기존 node 의 right 였던 n 을 연결
    n.left = newNode; // 5. n 의 left 는 이제 newNode
  }

  private del(node: ListNode) {
    // node.right.left = node.left;
    // node.left.right = node.right;
    const n = node.right.right;
    node.right = n;
    node.left = node;
  }

  insertFront(value: number): boolean {
    if (this.isFull()) {
      return false;
    }

    this.len += 1;
    this.add(this.head, new ListNode(value));

    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) {
      return false;
    }

    this.len += 1;
    this.add(this.tail.left, new ListNode(value));
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) {
      return false;
    }

    this.len -= 1;
    this.del(this.head);
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) {
      return false;
    }

    this.len -= 1;
    this.del(this.tail.left.left);
    return true;
  }

  getFront(): number {
    return this.len ? this.head.right.val! : -1;
  }

  getRear(): number {
    return this.len ? this.tail.left.val! : -1;
  }

  isEmpty(): boolean {
    return this.len === 0;
  }

  isFull(): boolean {
    return this.len === this.k;
  }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

export {};
