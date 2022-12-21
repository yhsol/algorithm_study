// export class ListNode {
//     val: number;
//     next: ListNode | null;
//     constructor(val?: number, next?: ListNode | null) {
//       this.val = val === undefined ? 0 : val;
//       this.next = next === undefined ? null : next;
//     }
//   }

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

// iterative traverse

const printNodeByIterate = (node: ListNode) => {
  let currNode: ListNode | null = node;
  while (!!currNode) {
    console.log("iterative traverse: ", currNode.val);
    currNode = currNode.next;
  }
};

printNodeByIterate(headNode);

// recursive traverse

const printNodeByRecursive = (node: ListNode) => {
  console.log("recursive traverse: ", node.val);

  if (node.next) {
    printNodeByRecursive(node.next);
  }
};

printNodeByRecursive(headNode);
