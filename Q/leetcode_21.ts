/**
 * Merget Tow Sorted List
 *
 * [1,3,5] list, [1,2,3,4] list.
 * 두 리스트는 정렬되어 있는 상태.
 * 이걸 합쳐서 [1,1,2,3,3,4,5] 와 같이 정렬된 리스트로 만들기.
 *
 * 첫번째 리스트의 head를 가리키는 node1, 두번째 리스트의 head를 가리키는 node2 를 만든다.
 * 그래서 둘을 비교하고 작은쪽을 output list 에 담는다.
 * 담은쪽 노드의 포인터를 그 다음으로 옮긴다.
 * output 노드를 만들기 위해서 dummy 노드 생성.
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists2(list1: ListNode | null, list2: ListNode | null) {
  let dummy = new ListNode();
  let [node1, node2] = [list1, list2];
  // curr 보다 tail 로 이름을 짓는게 이해하기 더 좋구만.
  let tail = dummy;

  // node1 과 node2 를 비교.
  // node1 이 더 작으면 output 과 연결된 curr 의 next 를 node1 으로 연결.
  // node1 은 이제 통과이기때문에 next 로 이동. node1 = node1.next;
  // curr 노드는 최신의 상태로 업데이트 해줘야함. curr = curr.next; 로 이동.
  while (node1 && node2) {
    if (node1.val < node2.val) {
      tail.next = node1;
      node1 = node1.next;
    } else {
      tail.next = node2;
      node2 = node2.next;
    }
    tail = tail.next;
  }

  // 남은 노드들은 그대로 다 붙이기.
  if (node1) {
    // node1 자체가 정렬된 리스트이기 때문에 그대로 연결해버리면 됨.
    tail.next = node1;
  }

  if (node2) {
    tail.next = node2;
  }

  // while (node1) {
  //   curr.next = node1;
  //   node1 = node1.next;
  //   curr = curr.next;
  // }
  // while (node2) {
  //   curr.next = node2;
  //   node2 = node2.next;
  //   curr = curr.next;
  // }

  return dummy.next;
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let arr1 = [];
  let arr2 = [];
  let resArr = [];

  while (list1) {
    arr1.push(list1.val);
    list1 = list1.next;
  }

  while (list2) {
    arr2.push(list2.val);
    list2 = list2.next;
  }

  resArr = [...arr1, ...arr2].sort((a, b) => a - b);

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

  resArr.forEach((item) => {
    addAtTail(item);
  });

  return res;
}
