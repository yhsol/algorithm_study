class MyCircularQueue {
  private queue: (number | null)[] = [];
  private size: number;
  private p1: number = 0;
  private p2: number = 0;

  constructor(k: number) {
    this.queue = new Array(k).fill(null);
    this.size = k;
  }

  enQueue(value: number): boolean {
    if (this.queue[this.p2] === null) {
      this.queue[this.p2] = value;
      this.p2 = (this.p2 + 1) % this.size;
      return true;
    } else {
      return false;
    }

    // if (this.isFull()) {
    //   return false;
    // }

    // this.queue.push(value);
    // return true;
  }

  deQueue(): boolean {
    if (this.queue[this.p1] === null) {
      return false;
    } else {
      this.queue[this.p1] = null;
      this.p1 = (this.p1 + 1) % this.size;
      return true;
    }

    // if (this.isEmpty()) {
    //   return false;
    // }

    // this.queue.shift();
    // return true;
  }

  Front(): number {
    return this.queue[this.p1] === null ? -1 : this.queue[this.p1]!;
    // return this.queue[0] ?? -1;
  }

  Rear(): number {
    const last = this.p2 <= 0 ? this.size - 1 : this.p2 - 1;
    return this.queue[last] === null ? -1 : this.queue[last]!;
    // return this.queue[this.queue.length - 1] ?? -1;
  }

  isEmpty(): boolean {
    return this.p1 === this.p2 && this.queue[this.p1] === null;
    // return this.queue.length === 0;
  }

  isFull(): boolean {
    return this.p1 === this.p2 && this.queue[this.p1] !== null;
    // return this.queue.length === this.size;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
