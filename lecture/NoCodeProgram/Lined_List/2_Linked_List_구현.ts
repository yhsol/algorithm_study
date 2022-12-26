class ListNode {
  constructor(public val: number, public next: ListNode | null = null) {}
}

const printNodes = (node: ListNode | null) => {
  let curr: ListNode | null = node;
  while (curr) {
    console.log("current node: ", curr.val);
    curr = curr.next;
  }
};

class SinglyLinkedList {
  constructor(public head: ListNode | null = null) {}

  //=> addAtHead: O(1)
  addAtHead = (val: number) => {
    const newNode = new ListNode(val);
    // newNode 의 next 는 head 가 원래 가리키고 있던 것을 가리키고,
    newNode.next = this.head;
    // head 는 newNode 를 가리킨다.
    this.head = newNode;
    // 그러면 head(newNode) -> head 가 원래 가리키고 있던 것. 이 됨.
  };

  //=> 마지막 노드의 next 를 새로 만든 노드로 만들어주면 된다.
  //=> addAtTail: O(n)
  addAtTail = (val: number) => {
    // 먼저, 넘어온 value 로 새로운 노드 생성.
    const newNode = new ListNode(val);
    // head 가 null 이면 newNode 를 head 로 만들고,
    if (!this.head) {
      this.head = newNode;
      return;
    }
    // head 가 null 이 아니면, head 를 curr 로 만들고,
    let curr = this.head;
    // curr.next 가 null 이 아닐 때까지 curr 을 curr.next 로 이동시킨다.
    while (curr.next) {
      curr = curr.next;
    }
    // curr.next 가 null 이 되면, curr.next 를 newNode 로 만든다.
    curr.next = newNode;
  };

  // curr 를 head 로 부터 시작해서 찾는 value 가 나올 때 까지 업데이트 하면 됨.
  //=> findNode: O(n)
  findNode = (val: number) => {
    let curr = this.head;

    while (curr) {
      if (curr.val === val) return curr;
      curr = curr.next;
    }

    return null;
  };

  //=> addAfter: O(1)
  addAfter = (node: ListNode, val: number) => {
    const newNode = new ListNode(val);
    newNode.next = node.next;
    node.next = newNode;
  };

  // curr 노드를 삭제하기 위해서 prev 노드의 next 를 curr.next 로 연결하려면
  // prev 를 찾아야 하고, 그러면 head 부터 찾아야하는데 그러면 O(n) 이 걸린다.
  // 그래서 지금 구현에서는 deleteAfter 를 구현. 넘어오는 node 의 다음 node 를 삭제.
  // 지금은 singly linked list 를 구현하고 있기 때문에 위와 같은 문제가 있음.
  // doubly linked list 를 구현하는 중이라면 각 node 의 prev 와 next 를 알고 있기 때문에 O(1) 에 해결할 수 있음.
  //=> deleteAfter: O(1)
  deleteAfter = (prevNode: ListNode) => {
    if (prevNode.next) {
      prevNode.next = prevNode.next.next;
    }
  };
}

const slist = new SinglyLinkedList();
slist.addAtHead(1);
slist.addAtHead(2);
slist.addAtTail(3);
// printNodes(slist.head); //=> 2, 1, 3
slist.addAfter(slist.findNode(1)!, 4);
printNodes(slist.head); //=> 2, 1, 4, 3
console.log(slist.findNode(1)); //=> { val: 1, next: ListNode { val: 3, next: null } }
