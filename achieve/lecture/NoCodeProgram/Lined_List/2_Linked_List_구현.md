# Linked List 구현

노드를 묶어서 클래스로 구현

oop 개념으로 접근

인터페이스는 아래와 같이 구성.

- add at Head
- add at Back / After
- Find
- Delete (Delete After)

---

가장 먼저 HeadNode 가 있어야 함.
HeadNode 는 비어있는 상태

```ts
class ListNode {
  constructor(public data: number, public next: ListNode | null = null) {}
}

const printNodes = (node: ListNode) => {
  let curr = node;
  while (curr) {
    console.log("current node: ", curr);
    curr = curr.next;
  }
};
```

이러한 상태에서 singly linked list 를 구현해보자.
head 는 빈 상태.

```ts
class SinglyLinkedList {
  constructor(public head: ListNode | null = null) {}
}
```

- add at head

첫 번째로 구현할 함수는 add at Head. Head 에 노드를 추가하는 함수.
새로운 노드를 하나 만들고, Head 가 가리키는 next 에 새로운 노드를 연결해 줌.
addAtHead(1), addAtHead(2) 를 순차적으로 실행한다면
먼제 HeadNode 는 val 이 1 인 노드를 가리키고, 다음 addAtHead(2) 를 실행하면
HeadNode 는 val 이 2 인 노드를 가리키고, 그 노드의 next 는 val 이 1 인 노드를 가리키게 됨.

`HeadNode -> {val: 2, next: {val:1, next: null}}` 같은 식.

```ts
class SinglyLinkedList {
  constructor(public head: ListNode | null = null) {}

  addAtHead(val: number) {
    const newNode = new ListNode(val);
    // newNode 의 next 는 head 가 원래 가리키고 있던 것을 가리키고,
    newNode.next = this.head;
    // head 는 newNode 를 가리킨다.
    this.head = newNode;
    // 그러면 head(newNode) -> head 가 원래 가리키고 있던 것. 이 됨.
  }
}

const slist = new SinglyLinkedList();
slist.addAtHead(1);
slist.addAtHead(2);
printNodes(slist.head); //=> 2, 1
```

- add at back

1. 먼저 추가할 노드를 만든다. -> newNode
2. 원래 있던 링크드 리스트의 끝으로 도달하기 위해서 current node reference 를 만들어서
   끝까지 도달할 수 있게 만든다.
3. 끝에 도달한 current node 가 가리키고 있는 next 를 newNode 로 바꿔준다.
