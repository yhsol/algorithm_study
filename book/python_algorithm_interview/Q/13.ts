// Definition for singly-linked list.

class ListNode {
  val: number;
  next?: null;
  constructor(val: number = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  isPalindrome(head: ListNode): boolean {
    let listed = [];

    let node = head;

    while (node != null) {
      listed.push(node.val);
      node = node.next;
    }

    let left = 0;
    let right = listed.length - 1;
    while (left < right) {
      if (listed[left] != listed[right]) {
        return false;
      }
      left += 1;
      right -= 1;
    }

    return true;
  }
}
