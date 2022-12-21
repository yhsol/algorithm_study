/**
 * Definition for singly-linked list.
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindromeByIterative(head: ListNode | null): boolean {
  let q: number[] = [];

  if (!head) return true;

  let currNode: ListNode | null = node;

  while (!!currNode) {
    q.push(currNode.val);
    currNode = currNode.next;
  }

  console.log("q : isPalindromeByIterative: ", q);

  while (q.length > 1) {
    if (q.shift() !== q.pop()) {
      return false;
    }
  }

  return true;
}

function isPalindromeByRecursive(head: ListNode | null): boolean {
  let q: number[] = [];

  if (!head) return true;

  const makeArray = (node: ListNode) => {
    q.push(node.val);

    if (node.next) {
      makeArray(node.next);
    }
  };

  makeArray(head);

  console.log("q : isPalindromeByRecursive: ", q);

  while (q.length > 1) {
    if (q.shift() !== q.pop()) {
      return false;
    }
  }

  return true;
}

let node = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
console.log(isPalindromeByIterative(node));
console.log(isPalindromeByRecursive(node));
