class ListNode622 {
  constructor(
    public val: number,
    public next: ListNode622 | null = null,
    public prev: ListNode622 | null = null
  ) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class MyCircularQueue {
  private left: ListNode622 | null = null;
  private right: ListNode622 | null = null;
  private space: number = 0;

  constructor(k: number) {
    this.left = new ListNode622(0, null, null);
    this.right = new ListNode622(0, null, this.left);
    this.left.next = this.right;
    this.space = k;
  }

  enQueue = (value: number) => {
    if (this.isFull()) {
      return false;
    }

    const cur = new ListNode622(value, this.right, this.right?.prev);
    if (this.right?.prev?.next) {
      this.right.prev.next = cur;
      this.right.prev = cur;
      this.space -= 1;
    }

    return true;
  };

  deQueue = () => {
    if (this.isEmpty()) {
      return false;
    }

    if (this.left?.next?.next) {
      this.left.next = this.left.next.next;
      this.left.next.prev = this.left;
      this.space += 1;
    }

    return true;
  };

  Front = () => {
    if (this.isEmpty()) {
      return -1;
    }

    return this.left?.next?.val;
  };

  Rear = () => {
    if (this.isEmpty()) {
      return -1;
    }

    return this.right?.prev?.val;
  };

  isEmpty = () => {
    // this.left.next 가 직접적으로 this.right 를 가리킨다는건 그 사이에 아무것도 없다는 것.
    return this.left?.next === this.right;
  };

  isFull = () => {
    return this.space === 0;
  };
}

export {};
