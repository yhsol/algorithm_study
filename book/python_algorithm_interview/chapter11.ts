// 28 해시맵 디자인
// put(key, value)
// get(key)
// remove(key)

interface Hashmap {
  put(key: number, value: number): void;
  get(key: number): number;
  remove(key: number): void;
}

class MyHashMap {
  dict: Record<number, number> = {};

  constructor(obj?: Record<number, number>) {
    if (!obj) return;
    this.dict = obj;
  }

  put(key: number, value: number): void {
    this.dict[key] = value;
  }

  get(key: number): number {
    if (!this.dict.hasOwnProperty(key)) return -1;
    return this.dict[key];
  }

  remove(key: number): void {
    delete this.dict[key];
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
