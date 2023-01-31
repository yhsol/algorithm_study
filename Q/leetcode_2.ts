/**
 * neetcode
 * 2-4-3, 5-6-4 가 주어진다면 결국 하고 싶은 것은
 * 342 + 465 = 807 이다.
 * 여기서 덧셈에서의 carry 를 확인.
 * 이 문제에는 엣지 케이스가 많음. 그래서 이 문제에 dislike 가 많음.
 *
 * 주어진 조건은 non-empty, non-negative, digits are stored in reverse order
 *
 * 예시는 2-4-3-1, 5-6-4
 * 두개를 반복하면서 덧셈을 해 나감.
 *   2 4 3 1
 * + 5 6 4
 * 리스트가 역순으로 정렬된 건 오히려 편하다.
 * 첫번째 자리 덧셈 -> 7
 * 두번째 자리 덧셈 -> 0 & carry (1)
 * 세번째 자리 덧셈 -> 8
 * 네번째 자리 덧셈 => 한쪽에 숫자가 없으니까 0 이라고 간주함. -> 1
 *
 * 여기서 엣지 케이스 하나. 두 리스트의 사이즈가 다를 경우.
 * 다른 하나. carry 다루기. 7 + 8 에서 그 자리의 결과는 5 이고, carry 는 1 임.
 * 그러면 그 앞자리에 캐리를 넘겨서 1 을 처리해줘야 함.
 *
 * 문제 풀이:
 * 1. 더미 노드 생성.
 * 2. curr 포인터 생성하고 더미 노드를 가리키게 함.
 * 3. 반복해야함. l1 또는 l2 가 있는 동안에 반복하면 됨.
 * 4. 더할 값들을 조금 정리해야함. 현재 노드의 val 을 사용하되, val 이 없으면 0 을 사용.
 * 5. carry 를 관리할 변수 생성. 기본값은 0.
 * 6. 덧셈값을 저장할 변수를 만들고 여기에 덧셈 값 저장. v1 + v2 를 해주고 carry 도 더해줌.
 * 7. 이 덧셈값에는 carry 도 포함되어 있으니까 이걸 분리해줘야 함. carry 는 덧셈값을 10 으로 나눈 몫. 덧셈값은 10 으로 나눈 나머지.
 * 8. 그러면 carry 는 carry 변수가 갖고 있게 하고, 덧셈값을 얻었으니 이걸 curr.next 에 insert 하면 됨.
 * 9. 포인터 업데이트.
 * 10. curr, l1 이 null 이 아닐 경우 l1, l2 가 null 이 아닐경우 l2 업데이트.
 * 11. 다 된 것 같지만 엣지 케이스가 있음. 이대로 끝나면 마지막 carry 를 처리하지 못함. 버리게 됨. 7, 8 일 때 5 만 들어가고 1 이 버려짐.
 *     그렇기 때문에 반복문 조건에 carry 가 있는 동안 인 것도 추가해야함. carry 가 있는 동안이라는 조건을 추가하면
 *     ㅣ1, ㅣ2 는 없으니까 0이 될거고, carry 만 더해져서 처리된다.
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

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbersWithNeedCode(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // 일단 더미를 만든다.
  let dummy = new ListNode(0); // 1
  let curr = dummy; // 2

  let carry = 0; // 5

  while (l1 || l2 || carry) {
    // 3, 11
    let v1 = l1?.val ?? 0; // 4
    let v2 = l2?.val ?? 0; // 4

    let val = v1 + v2 + carry; // 6

    carry = parseInt(`${val / 10}`); // 7, 8
    val = val % 10; // 7
    // 값 넣고
    curr.next = new ListNode(val); // 8
    // pointer update // 9
    // 업데이트
    curr = curr.next; // 10
    l1 = l1?.next ?? null; // 10
    l2 = l2?.next ?? null; // 10
  }

  return dummy.next;
}

let l1 = new ListNode(2); // [2,4,3]
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5); // [5,6,4]
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

// Explanation: 342 + 465 = 807.
console.log("result: ", addTwoNumbersWithNeedCode(l1, l2)); //=> [7,0,8]
