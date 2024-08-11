/**
 * 설정과 분해
 * 테스트를 작성하는 동안 종종 테스트가 수행되기 전에 발생할 필요가 있는 설정 작업이 있고,
 * 테스트가 수행 된 이후 발생해야 할 필요가 있는 마무리 작업이 있습니다.
 * Jest는 이를 처리하는 헬퍼 함수들을 제공합니다.
 *
 * 많은 테스트를 위한 설정 반복
 * beforeEach, afterEach
 *
 * befroeEach, afterEach 에서 비동기 처리
 * beforeEach와 afterEach는 테스트는 비동기 코드가 처리할 수 있는 동일한 방법으로 비동기 코드를 처리할 수 있습니다
 *
 * 일회성 설정
 * 경우에 따라, 파일의 시작 부분에 한 번만 설정할 필요가 있습니다. 설정이 비동기인 경우 특히 귀찮을 수 있으므로,
 * 인라인으로 설정 할 수 없습니다. Jest는 이 상황을 처리하기 위한 beforeAll과 afterAll을 제공합니다.
 *
 * 기본적으로, before 와 after 블럭은 파일의 모든 테스트에 적용됨.
 * describe 블럭을 사용해서 테스트들을 그룹핑할 수 있고, describe 블럭 내부에서
 * before 와 after 블럭을 사용하면, describe 블럭 내부의 테스트들에만 적용됨.
 * 최상위 레벨의 beforeEach가 describe 블럭 내부의 beforeEach이전에 실행되는 것에 주목하세요.
 *
 * describe의 실행 순서와 테스트 블럭
 * Jest는 실제 테스트를 실행하기 전에 테스트 파일의 모든 describe 처리기를 실행합니다.
 * 이것은 describe 블럭 내부보다 before*와 after* 내에서 설정과 분해를 수행하는 또 다른 이유입니다.
 * describe 블럭이 완료되면, 기본적으로 Jest는 수집 단계에서 만난 순서대로 다음 단계로 순차적으로 모든 테스트를 수행하며,
 * 다음 단계로 이동하기 전에 각각이 완료되고 정리되기를 기다립니다. (code 1)
 *
 * 일반적인 조언
 * 테스트가 실패하는 경우, 가장 먼저 확인해야 할 사항 중 하나는 수행할 테스트가 유일할 경우 테스트가 실패하는가의 여부여야 합니다.
 * Jest에서 단 하나의 테스트만 수행하기 위해, 임시적으로 그 test 명령어를 test.only로 변경하세요:
 *
 * 규모가 큰 스위트의 일부로 수행될 때 종종 실패하지만 단독으로 수행할 때에는 실패하지 않는 테스트가 있다면,
 * 다른 테스트로부터의 무엇인가가 이 테스트를 간섭한다는 것은 좋은 추측입니다.
 * beforeEach으로 일부 공유 상태를 명확하게 하여 종종 이를 고칠 수 있습니다.
 * 일부 공유 상태가 수정되고 있는지 확실하지 않다면 데이터를 기록하는 beforeEach를 시도해 볼 수도 있습니다.
 */

import { afterEach, beforeEach, test, describe } from "@jest/globals";

// cities
const citiesOrigin = ["Vienna", "San Juan"];

let cities: string[] = [];

// initializeCityDatabase
const initializeCityDatabase = () => {
  cities.push(...citiesOrigin);
};

// clearCityDatabase
const clearCityDatabase = () => {
  cities = [];
};

// isCity
const isCity = (city: string) => {
  return cities.includes(city);
};

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

// code 1
describe("outer", () => {
  console.log("describe outer-a");

  describe("describe inner 1", () => {
    console.log("describe inner 1");
    test("test 1", () => {
      console.log("test for describe inner 1");
      expect(true).toEqual(true);
    });
  });

  console.log("describe outer-b");

  test("test 1", () => {
    console.log("test for describe outer");
    expect(true).toEqual(true);
  });

  describe("describe inner 2", () => {
    console.log("describe inner 2");
    test("test for describe inner 2", () => {
      console.log("test for describe inner 2");
      expect(false).toEqual(false);
    });
  });

  console.log("describe outer-c");
});

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2
