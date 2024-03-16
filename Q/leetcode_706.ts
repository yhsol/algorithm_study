class ListNode706 {
  key: number;
  value: number;
  next: ListNode706 | null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class MyHashMap706 {
  size: number;
  table: Array<ListNode706 | null>;

  constructor() {
    this.size = 1000;
    this.table = new Array(this.size).fill(null);
  }

  put(key: number, value: number): void {
    const index = key % this.size;
    if (this.table[index] === null) {
      this.table[index] = new ListNode706(key, value);
      return;
    }

    let p = this.table[index];
    while (p) {
      if (p.key === key) {
        p.value = value;
        return;
      }
      if (!p.next) {
        p.next = new ListNode706(key, value);
        break;
      }
      p = p.next;
    }
  }

  get(key: number): number {
    const index = key % this.size;
    let p = this.table[index];

    while (p) {
      if (p.key === key) {
        return p.value;
      }
      p = p.next;
    }

    return -1;
  }

  remove(key: number): void {
    const index = key % this.size;
    if (!this.table[index]) {
      return;
    }

    let p = this.table[index];
    if (p?.key === key) {
      this.table[index] = p.next;
      return;
    }

    let prev = p;
    p = p?.next || null;
    while (p) {
      if (p.key === key) {
        prev!.next = p.next;
        return;
      }
      prev = p;
      p = p.next;
    }
  }
}
