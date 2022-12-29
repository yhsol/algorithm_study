/**
 * 매처(matcher) 사용하기
 *
 * 값을 테스트 하기 위한 가장 단순한 방법은 정확한 일치를 사용하는 것입니다. toBe: test 1
 * toBe는 정확한 등가를 검사하기 위해 Object.is를 사용합니다.
 *
 * 객체의 값을 확인하려면, 대신 toEqual을 사용하세요: toEqual을: test 2
 * toEqual은 객체나 배열의 모든 필드를 재귀적으로 확인합니다.
 *
 * 매처의 반대를 테스트 할 수도 있습니다: not: test 3
 *
 * undefined, null, false 를 구별하고 싶을 때 헬퍼를 사용할 수 있음.
 * toBeUndefined, toBeNull, toBeFalsy, toBeTruthy, toBeDefined
 *
 * 숫자를 비교하는 대부분의 방법은 일치하는 동등한 매처를 가지고 있습니다.: 숫자 비교 헬퍼: test 4
 *
 * 부동 소수점 등가의 경우, 테스트가 사소한 반올림 오류에 따라 달라지는 것을 원치 않으므로 toEqual 대신 toBeCloseTo를 사용하세요.: test5
 * 0.1 + 0.2 를 하면 실제로 받는 값은 0.30000000000000004 임. (실제 콘솔에 찍어봐도 이렇게 출력됨.)
 * 그래서 toBe(0.3) 을 하면 fail 이 됨. 이런 경우 toBeCloseTo 를 사용해서 toBeCloseTo(0.3) 과 같이 비교하면 통과.
 * 부동 소수점 등가와 관련된 참고: https://vanillaani.tistory.com/6
 *
 * toMatch로 정규식과 비교하여 문자열을 검사할 수 있습니다: toMatch: test 6
 * 그냥 string 도 비교 할 수 있음.
 *
 * toContain를 사용하여 배열이나 이터러블이 특정 항목을 포함하는지 여부를 확인 할 수 있습니다: toContain: test 7
 *
 * 특정 함수가 호출될 때 오류를 발생시키는지를 테스트하려면 toThrow를 사용하세요.: toThrow: test 8
 *
 * 참고: https://mulder21c.github.io/jest/docs/en/next/using-matchers
 */

import { describe, expect, test } from "@jest/globals";
import { sum } from "../../Q/sum";

describe("test1: 단순 매치: toBe", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("test2: 객체 매치: toEqual", () => {
  test("object assingment", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });
});

describe("test3: 반대 매치: not", () => {
  test("adding positive numbers is not zero", () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });
});

describe("test3: undefined, null, false 등의 헬퍼", () => {
  test("null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test("zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
});

describe("test4", () => {
  test("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    expect(value).toBeLessThanOrEqual(4);
  });
});

describe("test5", () => {
  test("should adding floating point numbers", () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3); // 반올림 오류로 동작하지 않을 것입니다
    expect(value).toBeCloseTo(0.3); // 동작합니다
  });
});

describe("test6", () => {
  test("should there is no I in team", () => {
    expect("team").not.toMatch(/I/);
    expect("team").not.toMatch("I");
  });

  test('should there is a "stop" in Christoph', () => {
    expect("Christoph").toMatch(/stop/);
    expect("Christoph").toMatch("stop");
  });
});

describe("test7", () => {
  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "beer",
  ];

  test("should shopping list has beer on it", () => {
    expect(shoppingList).toContain("beer");
    expect(new Set(shoppingList)).toContain("beer");
  });
});

describe("test8", () => {
  function compileAndroidCode() {
    throw new Error("you are using the wrong JDK");
  }
  test("should compiling android goes as expected", () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);

    // 정확한 오류 메세지나 정규식을 사용할 수도 있습니다
    expect(compileAndroidCode).toThrow("you are using the wrong JDK");
    expect(compileAndroidCode).toThrow(/JDK/);
  });
});
