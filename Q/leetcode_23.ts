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
  constructor(val?: number, next?: ListNode) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists) return null;
  // 구현 문제들은 참 어렵고만.. 그냐저나 이 테마는 주석이 너무 잘 안보이긴 한다. 바꾸니 재밌긴 하지만.
  // design problem is usualy hard. because it need to understand about basic of how 구현체 works.
  // actually i didn't not know much about ListNode.
  // how to i solve this problem? how to through this kind of difficulty?
  // it need to study. yes. but it was really have that much worth? should i study this?
  // hmm. the key about study algorithm is not answer but approach. right?
  // so, focus to the approach. how to approach the problem and where get the hint about the solving probelm.
  return null;
}

export {};
