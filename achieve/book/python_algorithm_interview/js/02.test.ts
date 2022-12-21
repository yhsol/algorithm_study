import { solution } from "./02";

describe("02", () => {
  test("02 solution", () => {
    const target = solution("hello".split(""));
    const expected = "hello".split("").reverse();
    expect(target).toEqual(expected);
  });
});
