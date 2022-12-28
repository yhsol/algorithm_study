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

// 새로운 linked list 를 만들어서 리턴하는걸로 해결은 되지만 느림.
function removeElements(head: ListNode | null, val: number): ListNode | null {
  let res: ListNode | null = null;

  const addAtTail = (val: number) => {
    const newNode = new ListNode(val);
    if (!res) {
      res = newNode;
      return;
    }

    let curr = res;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
  };

  while (head) {
    if (head.val !== val) {
      addAtTail(head.val);
    }
    head = head.next;
  }

  return res;
}
