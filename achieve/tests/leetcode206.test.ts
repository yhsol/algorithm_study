import { describe, expect, test } from "@jest/globals";
import {
  reverseListIterativeByNeetCode,
  reverseListRecursiveByNeetCode,
  ListNode,
} from "../Q/leetcode_206";

describe("leetcode106", () => {
  test("should reverse given list", () => {
    // given
    const list = new ListNode(1, new ListNode(2));

    // then
    const result = reverseListIterativeByNeetCode(list);
    const expected = new ListNode(2, new ListNode(1));

    expect(result).toStrictEqual(expected);
  });
});
