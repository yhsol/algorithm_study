/**
 * Definition for singly-linked list.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindrome(head: ListNode | null): boolean {
  let q: number[] = [];

  if (!head) return true;

  let node: ListNode | null = head;

  while (!!node) {
    q.push(node.val);
    node = node.next;
  }

  while (q.length > 1) {
    if (q.shift() !== q.pop()) {
      return false;
    }
  }

  return true;
}
