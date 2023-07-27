class MyQueue {
  private q: number[] = [];

  constructor() {}

  push(x: number): void {
    this.q.push(x);
  }

  pop(): number {
    return this.q.shift() || 0;
  }

  peek(): number {
    return this.q[0];
  }

  empty(): boolean {
    return this.q.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
