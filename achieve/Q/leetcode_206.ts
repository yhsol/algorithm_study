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

export class ListNode {
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

// 반복할 node 하나,
// 새로 리스트를 만들어갈 시작점 하나. prev
// node 를 돌면서
// next 변수를 만들어서 여기에 node 의 next 를 담아두고.
// node 의 next 를 prev 로 바꿈. 순서를 바꿔버리는거.
// prev 에는 현재 node 담고. 이 node 는 next 가 아까 시점의 prev 임.
// 그러고 node 는 그 다음으로..

/**
 * neetcode 풀이
 * 1 -> 2 > 3 이 있으면 1 <- 2 <- 3 이 되고, 3 이 newHead 가 되면 됨.
 * iterative, recursive 둘 다 가능.
 *
 * iterative
 * 반복을 하기 위해서 two pointer 를 사용할 수 있음.
 * 반복을 하면서 node 의 next 가 next 를 가리키는게 아니라 prev 를 가리키게 할 수 있으면 됨.
 * 현재 리스트의 첫 노드를 current node 로 둘 수 있고, 그보다 앞에 prev node 를 둘 수 있음. null 을 가지는.
 * null(prev node) -> 1(current node) -> 2 -> 3 과 같은 식.
 * 그러면 1.next 는 2 가 아니라 prev 인 null 을 가리키게 하면 됨.
 * 이렇게 하고나면 prev 포인터는 다음 포인터 즉, 지금 작업한 1 node 를 가리키면 됨. prev node 는 1 로 이동.
 * current node 도 역시 다음 노드인 2 node 로 옮겨주면 됨.
 * 즉 prev, curr 가 노드 하나 차이로 옮겨가는 것. 시작은 prev 는 head 하나 전, curr 는 head 부터.
 * 그러다가 curr 노드를 옮겼는데 없으면 끝까지 온 거.
 * 그러면 새로 만들어진 head 를 리턴하면 됨.
 * 그러면 새로 만들어진 head 는 뭘까?
 * 그동안 옮겨온 prev 가 뒤집어진 리스트를 가지고 있음.
 * prev 를 리턴.
 *
 * recursive
 * recursive 로 문제풀 때 sub problem 으로 문제를 쪼개서 보면 좋음.
 * 지금 우리의 initital head 는 1. 1 부터 시작하는 1->2->3 의 리스트.
 * 근데 여기서 재귀호출을 한다고 했을 때 전체 링크드 리스트를 다 리버스 하는게 아니라
 * remainder of the linked list (1 이 아닌 2->3) 를 리버스 한다.
 * 즉 매번 현재 노드를 except 하는 것.
 * 그러면 이제 우리가 뒤집으려는 노드는 2 -> 3 의 두개의 노드.
 * 여기서 한발짝 더 나가보자.
 * 이제 2 가 new head.
 * 그러면 2 를 except 하면 sub problem 은 남은 노드 뒤집기 즉, 3 노드를 뒤집는 문제로 쪼갤 수 있음.
 * 여기서 한발짝 더 나가면?
 * 그 다음은 노드가 없음. null 임. 뒤집을게 없음.
 * 그러면 여기가 종료 조건.
 *
 * 그러면, 하나를 뒤집는 문제로 돌아와서. 3 을 뒤집자. 어떻게?
 * 3.next 는 null. 이걸 3.next 가 prev 인 2 를 가리키게 해야 함.
 * 근데 재귀니까 prev 를 가져와서 붙이고 이럴 수는 없음.
 * 그러면, 3.next 를 keep 함.
 * 여기서 pop back up. 리턴함.
 * 그러면 2 개를 뒤집는 문제로 도착.
 * 그러면 지금 2번 노드에 있고, 3번 노드에 접근할 수 있음.
 * 그러면 3번 노드의 next 를 현재 노드(me, curr) 인 2번 노드로 하고,
 * 2번 노드의 next 는 3번 노드가 갖고 있던 next 를 연결. 2번 노드의 next 는 null 이 된다.
 * 그러면 지금 3번 노드가 new head 이고, 2번 노드의 next 인 null 이 tail 임.
 * 자 그러면 이제 때 pop back up.
 * 그러면 이제 3개의 노드 뒤집기를 할 차례임.
 * 여기서도 해왔던걸 그대로 하면 됨.
 * 1번 노드는 2번 노드에 접근 가능.
 * 그러면 2번 노드의 next 를 1번 노드를 가리키게 한다.
 * 그리고 1번 노드의 next 포인터는 null 을 가리키게 됨.
 * 링크의 끝이니까.
 *
 * 재귀 만드는 생각 전개
 * 뒤집는 문제?
 * 뒤집을 걸 쪼개고 쪼개. 쪼갤 수 있는데 까지.
 * 쪼갤 수 없는 때? 그 때가 종료 조건.
 */

export function reverseListRecursiveByNeetCode(
  head: ListNode | null
): ListNode | null {
  // 종료 조건
  if (!head) {
    return null;
  }

  // new head 를 가지고 있을 variable 선언
  // head 노드는 재귀 호출에서 current node 임.
  let newHead: ListNode | null = head;

  // head.next 가 있다는건 sub probelm 이 아직 끝나지 않았음을 의미.
  // 그러면 재귀 호출을 계속 진행. -> reverseListRecursiveByNeetCode(head.next)
  // 그리고 재귀 호출에서 리턴 된 값을 newHead 로 할 것.
  //
  // head.next 가 head 의 next 가 되면 뒤집기. -> head.next.next = head;
  if (head.next) {
    newHead = reverseListRecursiveByNeetCode(head.next);
    head.next.next = head;
  }

  // list 를 끝까지 다 돌고 나면 head.next 는 null 로 설정.
  head.next = null;

  // 우리가 원하는 뒤집어진 newHead 를 리턴.
  return newHead;
}

export function reverseListIterativeByNeetCode(head: ListNode | null) {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next; // curr.next; // 1. curr 는 그 다음 node 로 가면 되는데 여기서는 curr.next 의 값이 뒤집어진 상태임. 그러므로 뒤집어지기 전 값을 미리 저장해두고 그걸 여기에 반영.
  }

  return prev;
}

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

console.log(reverseListRecursiveByNeetCode(data));
