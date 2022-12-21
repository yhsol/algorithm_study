# Lined_List

- 링크를 이용해서 리스트를 만든다.

- 링크드 리스트는 노드로 이루어져 있고, 그 노드는 링크를 구성하면서 전체적으로 리스트처럼 동작한다.

- 노드 안에는 값과 주소를 저장하는 공간이 있음.

- 예를 들어서 1,2,3,4 를 넣고 싶으면 첫번째 노드에는 값은 1이 들어가고 주소는 두번째 노드를 가리키는 것임.

- 첫 번째 노드를 head 라고 부름. 전체 리스트에서 시작점을 의미하기 때문임.

- 1,2,3,4 가 들어있는 링크드 리스트에서 세 번째의 값을 찾고싶으면 head 의 주소를 통해 두번째 노드로, 두번째 노드의 주소를 통해서 세 번째 노드로 가서 그 값을 찾으면 됨.

- 시간 복잡도(time complexity) 로 말하자면 O(n) 이 됨.

---

Array 와 비교

- Array `[1, 2, 3, 4]`

  - 배열에서도 특정 값을 찾고자 하면 하나씩 검사해야되니까 O(n) 이 걸림.
  - 하지만 랜덤 액세스의 경우(`arr[3]` 와 같이 인덱스로 접근하는 식) 바로 접근 하기 때문에 O(1) 에 접근 가능함.

- Linked List
  - 랜덤 액세스를 애초에 지원하지 않음.
  - 위 array 와 같이 네 번재 위치에 접근 하고 싶다면 head 로 부터 주소를 3번을 타고 넘어가야 해당 값에 접근할 수 있음.
    - 이것을 각각의 노드에 한 번씩은 들려야 하기 때문에 traverse 라고도 함.
    - O(n) 이 걸림.
  - 링크드 리스트의 특이한 점은 새로운 노드를 넣거나 지울 때 시간 복잡도가 O(1) 이라는 것임.
    - 배열에서는 새로운 노드를 넣거나 지울 때는 O(n) 이 걸림.
    - 배열에서는 새로운 노드를 넣을 때는 빈 공간을 찾아야 하고, 지울 때는 빈 공간을 채워야 하기 때문임.
    - 링크드 리스트에서는 주소만 변경해 주면 됨.
      - 추가할 때는 추가할 자리 이전 노드를 추가하려는 노드에 연결하고, 추가하는 노드의 리스트를 다음 노드에 연결하면 됨.
      - 삭제할 때는 삭제할 자리 이전 노드를 삭제할 자리 다음 노드에 연결하면 됨.

---

- 한 방향으로 가리키는 링크드 리스트를 단방향 링크드 리스트라고 함. singly linked list
- 양 방향으로 가리키는 링크드 리스트는 양방향 링크드 리스트라고 함. doubly linked list
- doubly linked list
  - 첫 번째를 head, 마지막을 tail 이라고 함.
  - doubly linked list 는 tail 로 부터의 탐색도 가능함.

---

구현

- Node 생성
  - val 과 next 를 가짐.

```ts
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

// val 을 1 로 하는 head 노드 생성. next 는 null.
let headNode = new ListNode(1);
// next 에 두 번째 노드를 생성해서 담음.
headNode.next = new ListNode(2);
// and so on..
headNode.next.next = new ListNode(3);
headNode.next.next.next = new ListNode(4);
```

---

순회하면서 프린트

- iterative traverse

```ts
const printNode = (node: ListNode) => {
  let currNode: ListNode | null = node;
  while (!!currNode) {
    console.log("currNode: ", currNode.val);
    currNode = currNode.next;
  }
};

printNode(headNode);
```

- recursive traverse

```ts
const printNodeByRecursive = (node: ListNode) => {
  console.log("recursive traverse: ", node.val);
  if (node.next) {
    printNodeByRecursive(node.next);
  }
};

printNodeByRecursive(headNode);
```

- recursive traverse 를 사용하는 이유
  - 코드가 간결함.
  - 코드를 이해하기 쉬움.
- 실제 업무에서는 iterative 한 방법이 더 좋음.
  - recursive 는 stack overflow 가 발생할 수 있음.
  - recursive 는 stack 을 사용하기 때문에 메모리를 많이 사용함.
- 실제 업무에서는 recursive 한 방법 보다는 iterative 한 방법이 더 좋지만 코딩 테스트에서는 recursive 한 방법 또한 물어보는 경우가 있다. 그래서 두 가지 방법을 모두 알아두는게 좋음.

- recursive 보다 iterative 하게 순회하는게 좋은 이유를 chatGPT 에게 질문함.

  - 답변
  - Iterative traversal of a linked list is generally considered to be more efficient than recursive traversal because it does not require the function call overhead that is involved in recursive traversal.

  In iterative traversal, we use a loop to visit each node of the linked list, whereas in recursive traversal, we use a function that calls itself with a modified set of input parameters to visit the nodes of the linked list. Each time a function is called, there is some overhead involved in setting up the function call and returning from it. This overhead can add up quickly when traversing a large linked list recursively.

  In addition, recursive traversal can consume more memory, as each recursive call requires the system to store the current state of the function until the recursive call returns. This can be especially problematic if the linked list is very large or if the system has limited memory available.

  On the other hand, iterative traversal requires only a single loop and a single set of variables, which makes it more efficient in terms of both time and memory.

  That being said, both iterative and recursive approaches have their own advantages and disadvantages, and the most suitable approach depends on the specific requirements of the task at hand.
