class MyStack {
  private q: number[] = [];
  constructor() {}

  push(x: number): void {
    this.q.push(x);
    for (let i = 0; i < this.q.length - 1; i++) {
      const shifted = this.q.shift();
      if (shifted) {
        this.q.push(shifted);
      }
    }
  }

  pop(): number {
    return this.q.shift() || 0;
  }

  top(): number {
    return this.q[0];
  }

  empty(): boolean {
    return !this.q.length;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
