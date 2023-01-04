import { describe, expect, test } from "@jest/globals";
import { ListNode, mergeTwoLists2 } from "../Q/leetcode_21";

describe("leetcode21", () => {
  test("should merge two list", () => {
    // given
    const list1 = new ListNode(1);
    const list2 = new ListNode(2);

    // then
    const result = mergeTwoLists2(list1, list2);
    const expected = new ListNode(1, new ListNode(2));
    expect(result).toStrictEqual(expected);
  });
});
