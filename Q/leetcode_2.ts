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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let currl1 = l1;
  let tempL1: number[] = [];
  while (currl1) {
    if (currl1.val === 0 && currl1.next?.val === 0) {
      currl1 = currl1.next;
      continue;
    } else {
      tempL1.unshift(currl1.val);
      currl1 = currl1.next;
    }
  }

  let currl2 = l2;
  let tempL2: number[] = [];
  while (currl2) {
    if (currl2.val === 0 && currl2.next?.val === 0) {
      currl2 = currl2.next;
      continue;
    } else {
      tempL2.unshift(currl2.val);
      currl2 = currl2.next;
    }
  }

  const sum = String(Number(tempL1.join("")) + Number(tempL2.join("")));

  let result = new ListNode();
  let curr = result;

  for (let a of [...sum].reverse().join("")) {
    curr.next = new ListNode(Number(a));
    curr = curr.next;
  }

  return result.next;
}

let l1 = new ListNode(1); // [2,4,3]
l1.next = new ListNode(0);
l1.next.next = new ListNode(0);
l1.next.next.next = new ListNode(1);

let l2 = new ListNode(5); // [5,6,4]
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

// Explanation: 342 + 465 = 807.

console.log("result: ", addTwoNumbers(l1, l2)); //=> [7,0,8]
