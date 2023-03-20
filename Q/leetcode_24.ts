/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;

  while (curr && curr.next) {
    let nextPair = curr.next.next;
    let second = curr.next;

    second.next = curr;
    curr.next = nextPair;
    prev.next = second;

    prev = curr;
    curr = nextPair;
  }

  return dummy.next;
}

function value만변경(head: ListNode | null): ListNode | null {
  let curr = head;

  while (curr && curr.next) {
    if (curr.val !== null && curr.next.val !== null) {
      [curr.val, curr.next.val] = [curr.next.val, curr.val];
      curr = curr.next.next;
    }
  }

  return head;
}

// node 1->2->3->4
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

console.log(swapPairs(head));
