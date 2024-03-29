class Node<T> {
  public next: Node<T> | null = null;
  public prev: Node<T> | null = null;
  constructor(public data: T) {}
}

interface ILinkedList<T> {
  insertInBegin(data: T): Node<T>;
  insertAtEnd(data: T): Node<T>;
  deleteNode(node: Node<T>): void;
  traverse(): T[];
  size(): number;
  search(comparator: (data: T) => boolean): Node<T> | null;
}

class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> | null = null;

  public insertInBegin(data: T): Node<T> {
    const node = new Node(data);

    // list 가 비어있을 경우, 새로 추가된 요소가 list 의 head 가 됨.
    if (!this.head) {
      this.head = node;
      return node;
    }

    // list 가 비어있지 않을 경우, 새로 추가된 요소가 list 의 head 가 되고 이전 head 의 link 를 업데이트 함.
    this.head.prev = node;
    node.next = this.head;
    this.head = node;

    return node;
  }

  public insertAtEnd(data: T): Node<T> {
    const node = new Node(data);

    // list 가 비어있을 경우, 새로 추가된 요소가 list 의 head 가 됨.
    if (!this.head) {
      this.head = node;
      return node;
    }

    // list 가 비어있지 않을 경우, 마지막 노드를 찾고 새로 추가된 요소에 대한 포인터를 조정함.
    // 새로 추가된 노드의 prev 를 lastNode 로, lastNode 의 next 를 새로 추가된 노드로.

    // list 를 순회하고 노드에 대한 next 참조가 없는 노드를 반환하는 재귀 함수 사용
    const getLast = (node: Node<T>): Node<T> => {
      return node.next ? getLast(node.next) : node;
    };

    const getLastLoop = (node: Node<T>): Node<T> => {
      let last = node;
      while (last.next) {
        last = last.next;
      }
      return last;
    };

    const lastNode = getLast(this.head);
    const lastNodeLoop = getLastLoop(this.head);

    console.log("lastNode: ", lastNode);
    console.log("lastNodeLoop: ", lastNodeLoop);

    node.prev = lastNode;
    lastNode.next = node;
    return node;
  }

  public deleteNode(node: Node<T>): void {
    if (!node.prev) {
      this.head = node.next;
    } else {
      const prevNode = node.prev;
      prevNode.next = node.next;
    }
  }

  public traverse(): T[] {
    const array: T[] = [];

    if (!this.head) return array;

    // 재귀 함수는 `while` 반복을 시작하기 전에 목록의 크기를 모를 때 순회와 같은 작업에 대한 루프의 훌륭한 대안
    const addToArray = (node: Node<T>): T[] => {
      array.push(node.data);
      return node.next ? addToArray(node.next) : array;
    };

    // 이렇게 해도 되지 않나? => 안됨. 왜 안됨? => 됨. 근데 좀 더 복잡한 느낌이긴 하다. 코드를 잘 봐야 이해됨. 재귀도 마찬가지긴 하지만 좀 더 위험의 여지가 있는 듯.
    const addToArrayWhile = (node: Node<T>): T[] => {
      let currNode = node;
      while (currNode.next) {
        array.push(currNode.data);
        currNode = currNode.next;
        if (!currNode.next) array.push(currNode.data);
      }
      return array;
    };

    return addToArrayWhile(this.head);
  }

  public size(): number {
    return this.traverse().length;
  }

  public search(comparator: (data: T) => boolean): Node<T> | null {
    const checkNext = (node: Node<T>): Node<T> | null => {
      if (comparator(node.data)) return node;
      return node.next ? checkNext(node.next) : null;
    };

    return this.head ? checkNext(this.head) : null;
  }
}

interface Post {
  title: string;
}

const linkedList = new LinkedList<Post>();

// linkedList.insertAtEnd({ title: "Post A" });
// linkedList.insertAtEnd({ title: "Post B" });
// linkedList.insertInBegin({ title: "Post C" });
// linkedList.insertInBegin({ title: "Post D" });

// console.log(linkedList.traverse());
// console.log(linkedList.search(({ title }) => title === "Post A"));

// interface DoublyLinkedListNode<T> {
//   data: T;
//   next: DoublyLinkedListNode<T> | null;
//   prev: DoublyLinkedListNode<T> | null;
// }

interface IDoublyLinkedList<T> {
  add(data: T): void;
  dequeue(): T | undefined;
  pop(): T | undefined;
  values(): Generator<any, void, unknown>;
}

export class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;

  private size: number = 0;

  public length(): number {
    return this.size;
  }

  public isEmpty(): boolean {
    return this.size <= 0;
  }

  public contains(data: T): boolean {
    if (this.isEmpty()) return false;

    let temp = this.head;
    while (temp != null) {
      if (temp.data === data) return true;
      temp = temp.next;
    }
    return false;
  }

  public get(index: number): T {
    if (index > this.size || this.isEmpty())
      throw new RangeError("Index out of range.");

    if (index > this.size / 2) {
      let i = this.size - 1 - index;
      let temp = this.tail;
      while (i > 0) {
        temp = temp.prev;
        i--;
      }
      return temp.data;
    } else {
      let temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
      return temp.data;
    }
  }

  public getFirst(): T | null {
    if (this.head) return this.head.data;
    return null;
  }

  public getLast(): T | null {
    if (this.tail) return this.tail.data;
    return null;
  }

  public add(data: T) {
    const node: Node<T> = {
      data,
      next: null,
      prev: null,
    };

    if (!this.head) {
      this.head = node;
    }

    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    }

    this.tail = node;
    this.size++;
  }

  public dequeue(): T | undefined {
    if (this.head) {
      const data = this.head.data;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }
      return data;
    }
  }

  public pop(): T | undefined {
    if (this.tail) {
      const data = this.tail.data;
      this.tail = this.tail.prev;
      if (!this.tail) {
        this.head = null;
      } else {
        this.tail.next = null;
      }
      return data;
    }
  }

  public *values() {
    let current = this.head;
    while (current) {
      yield current.data;
      current = current.next;
    }
  }
}

export function addTwo(data: number) {
  return data + 2;
}
