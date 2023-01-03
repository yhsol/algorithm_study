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

// reverse the singly linked list and return the reversed list.
// how?
// 1-2-3-4-5
// 5-4-3-2-1
// 1.next.next.next = 1.next.next
// 1.next.next = 1.next
// dummy - 1 - 2 - 3 - 4 - 5 to dummy - 5 - 4 - 3 - 2 - 1
// how to ?

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let node = head;

  while (node) {
    let next = node.next;
    // 여기부터 node 탈바꿈
    node.next = prev;
    // 더미에는 next 가 prev 인 node 가 차곡 차곡.. 쌓일것.
    prev = node;
    node = next;
  }

  return prev;
}

function reverseListInBook(head: ListNode | null): ListNode | null {
  // node 를 만들고 head 를 담는다.
  let node = head;
  // prev 에는 null 을 세팅해둔다.
  let prev = null;

  // node 가 있는 동안.
  while (node) {
    // next 는 node.next 가 된다.
    // 아, 이걸로 temp 같이 저장해두는건가..
    let next = node.next;
    // node 의 next 를 prev 로 해서 뒤집기 시전. node.next 가 prev 이면.. 어떻게 되는거여.. prev 는 처음에 null 일거고.. 아 그러면 next 가 prev 인 'node' 가 생기고 그걸 prev 에 담는거구만. 복잡하구만..
    node.next = prev;
    // prev = 현재 노드를 담는다.
    prev = node;
    // node 는 next 를 가리킨다.
    node = next;
    // let next = node.next 로 변수를 만들어서 쓰지 않으면 혼란의 도가니임. node, node.next 막 꼬인다.
  }

  return prev;
}

const data = new ListNode(1);
data.next = new ListNode(2);

console.log(reverseList(data));

export {};
