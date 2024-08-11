import { ListNode, addTwoNumbersWithNeedCode } from "../Q/leetcode_2";

describe("addTwoNumbers", () => {
  test("returns correct sum of linked lists", () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    const expected = new ListNode(7, new ListNode(0, new ListNode(8)));
    expect(addTwoNumbersWithNeedCode(l1, l2)).toEqual(expected);
  });
});
