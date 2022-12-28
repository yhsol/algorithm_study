class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
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
