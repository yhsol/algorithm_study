/**
 * neetcode
 *
 * 투 포인터를 두고 반복하면서 주어진 val 과 같은 값을 가지는 노드를 삭제하면됨. 즉, 노드의 포인터를 옮겨주면 됨.
 * 근데 문제는 맨 앞의 엘리먼트가 삭제해야할 대상이라면 문제가 됨.
 * 그래서 dummy 노드를 사용.
 * 사용할 투 포인터로 prev(dummy node), curr(actual head of linked list) 를 만듦.
 * curr node 를 확인해서 주어진 val 과 같다면 prev 의 next 포인터를 curr node 의 next 로 연결.
 * 그러면 curr 노드는 업데이트 됨.
 * prev 노드의 업데이트는? curr 노드가 업데이트 된 후에 curr 였던 노드로 업데이트.
 *
 * 이런식으로 포인터들을 업데이트하며 삭제 처리를 할 수 있지만
 * 결국 리턴해야 하는 것은 그렇게해서 정제된 노드의 head.
 * 어떻게 head 를 리턴할 수 있을까. 포인터들을 다 옮겨버렸는데?
 * 그게 dummy 노드를 만든 또 다른 이유.
 * dummy 의 next 는 새로운 노드의 head 를 가리키고 있음.
 * dummy 의 next 가 가리키고 있는 노드는 적절한 노드의 head 일 것이기 때문.
 */

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

function removeElements4(head: ListNode | null, val: number) {
  let dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;
  let curr = head;

  while (curr) {
    let next = curr.next;

    if (curr.val === val) {
      prev.next = next;
    } else {
      prev = curr;
    }

    curr = next;
  }

  return dummy.next;
}

// curr 를 바꿨는데 왜 dummy 의 next 가 바뀌는 거냔 말이지.. 참조 때문인가?
// 참조 때문이네.
// let q = {t: 1}; let t = q; t.t = 2; q.t === 2;
// curr 는 dummy 를 받았고, curr 의 포인터가 바뀜. 이건 객체의 프로퍼티를 수정하는 것과 마찬가지.
// 그 프로퍼티의 값이 바뀌는 것.
// 즉 curr 리스트의 q 라는 노드가 바뀌는 걸 curr.q 가 바뀌는 거라고 보면
// dummy.q 도 바뀌는 것.
function removeElements3(head: ListNode | null, val: number) {
  let dummy = new ListNode();
  dummy.next = head;
  let curr = dummy;

  while (curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return dummy.next;
}

// 여기도 마찬가지. prev 가 바꼈는데 왜 dummy 의 next 가 바뀌냐고?
function removeElements2(head: ListNode | null, val: number): ListNode | null {
  let dummy = new ListNode(undefined, head);
  let [prev, curr] = [dummy, head];

  while (curr) {
    let next = curr.next;

    if (curr.val === val) {
      // 삭제해야할 노드를 발견하면 prev 의 포인터를 삭제할 노드를 건너 뛰고 그 다음 노드로 연결.
      prev.next = next;
    } else {
      prev = curr;
    }

    // 노드를 삭제하든지 안하든지, 즉 prev 포인터를 업데이트 하든지 안하든지 curr 포인터는 옮겨야 함.
    curr = next;
  }

  return dummy.next;
}

// 새로운 linked list 를 만들어서 리턴하는걸로 해결은 되지만 느림.
function removeElements1(head: ListNode | null, val: number): ListNode | null {
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
