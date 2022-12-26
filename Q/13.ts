/**
 * Definition for singly-linked list.
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindromeByIterative(head: ListNode | null): boolean {
  let q: number[] = [];

  if (!head) return true;

  let currNode: ListNode | null = node;

  while (!!currNode) {
    q.push(currNode.val);
    currNode = currNode.next;
  }

  while (q.length > 1) {
    if (q.shift() !== q.pop()) {
      return false;
    }
  }

  return true;
}

function isPalindromeByRecursive(head: ListNode | null): boolean {
  let q: number[] = [];

  if (!head) return true;

  const makeArray = (node: ListNode) => {
    q.push(node.val);

    if (node.next) {
      makeArray(node.next);
    }
  };

  makeArray(head);

  while (q.length > 1) {
    if (q.shift() !== q.pop()) {
      return false;
    }
  }

  return true;
}

// fast, slow 런너를 통해서 slow 가 중간에 도달할 때까지 역순으로 rev 연결 리스트를 만들고,
// slow 가 중간부터 끝까지 가능 동안 rev 연결 리스트랑 같은지 확인.
function isPalindromeByRunner(head: ListNode | null) {
  let rev: ListNode | null = null;
  let slow = head;
  let fast = head;

  while (fast && slow && fast.next) {
    fast = fast.next.next;
    // 역순 여결 리스트는 현재 값을 slow 로 교체하고 rev.next 는 rev 가 된다.
    // 즉 앞에 계속 새로운 노드가 추가되는 형태가 된다.
    // 결국 이 연결 리스트는 slow 의 역순 연결 리스트가 됨.
    // 입력값이 홀수일 때와 짝수일 때 마지막 처리가 다른데, 홀수일 때는 slow 런너가 한 칸 더 앞으로 이동하여 중앙의 값을 빗겨 나가야 한다.
    // 왜냐하면 여기서 3은 중앙에 위치한 값으로, 팰린드롬 체크에서 배제되어야 하기 때문이다.
    // 이든 fast 가 아직 null 이 아니라는 경우로 간주할 수 있으며, 따라서 이 경우 다음과 같이 slow 를 한 칸 더 이동해 마무리한다.

    // next 에다가 rev 를 넣으니까 계속 역순으로 리스트가 만들어지는 것.
    // 새로 추가한 노드의 다음이 기존 노드니까.
    // 새 노드 -> 기존 노드. 즉 역순으로 추가되는 형태가 된다.

    // rev = slow; rev.next = rev; 로 하면 안됨. 참조 때문에 문제가 되는 듯?
    rev = new ListNode(slow.val, rev);
    slow = slow.next;
  }

  // 홀, 짝에 따라 다른 문제에 대한 처리.
  // 홀수일 때는 slow 를 한 칸 더 이동.
  // 그래야 역순 리스트와 제대로 비교할 수 있음.
  if (fast && slow) {
    slow = slow.next;
  }

  while (rev && slow && rev.val === slow.val) {
    slow = slow.next;
    rev = rev.next;
  }

  return !rev;
}

/**
 * runner 기법
 * runner 는 연결 리스트를 순회할 때 2개의 포인터를 동시에 사용하는 기법.
 * 한 포인터가 다른 포인터보다 앞서게 하여 병합 지점이나 중간 위치, 길이 등을 판별할 때 사용.
 *
 * 2개의 포인터는 빠른 런너, 느린 런너로 구분.
 * 대게 빠른 런너(포인터)는 두 칸씩 건너뛰고, 느린 런너는 한 칸씩 이동.
 * 이때 빠른 런너가 연결 리스트의 끝에 도달하면 느린 런너는 연결 리스트의 중간 지점에 도달.
 * 이 같은 방식으로 중간 위치를 찾아내면, 여기서부터 값을 비교하거나 뒤집기를 시도하는 등 여러가지로 활용 가능.
 */

let node = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
console.log(isPalindromeByIterative(node));
console.log(isPalindromeByRecursive(node));
console.log(isPalindromeByRunner(node));
