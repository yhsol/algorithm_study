/**
 * 비동기 코드 테스트
 * 기본 적으로, Jest는 실행의 마지막에 도달하자마자 테스트가 종료됩니다. (code 1)
 * code 1 은 의도한대로 동작하지 않을 것임.
 * 콜백을 호출하기도 전에, 테스트는 fetchData가 끝나자마자 종료될 것이기 때문.
 *
 * done 사용
 * 빈 인자를 가진 함수에 테스트를 넣는 대신, done이라는 단일 인자를 사용
 * Jest는 테스트가 끝나기 전에 done 콜백이 호출될 때까지 기다릴 것 (code 2)
 *
 * 프로미스
 * fetchData가 문자열 'peanut butter'를 리졸브 하기로 한 프로미스를 반환한다고 가정 (code 3)
 *
 * .resolves / .rejects (code 4)
 *
 * Async/Await
 * 비동기 테스트를 작성하기 위해, test에 전달된 함수의 앞에 async 키워드를 사용 (code 5)
 * async과 await을 .resolves와 .rejects와 함께 조합할 수도 있습니다. (code 6)
 */

import { expect, test } from "@jest/globals";

// fetch data
function fetchData(callback: (data: string) => void) {
  setTimeout(() => {
    callback("peanut butter");
  }, 1000);
}

// fetch data promise
const fetchDataPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 1000);
  });
};

// code 1
// no peanut butter 를 넣어도 통과함 => 제대로 검증하지 못하고 있음.
test("the data is peanut butter", () => {
  function callback(data: string) {
    expect(data).toBe("peanut butter");
  }

  fetchData(callback);
});

// code 2
// 제대로 검증함.
// done 을 하지 않을 경우 Exceeded timeout 에러 발생.
test("the data is peanut butter", (done) => {
  function callback(data: string) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

// code 3
test("the data is peanut butter", () => {
  return fetchDataPromise().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

// code 4
test("the data is peanut butter", () => {
  return expect(fetchDataPromise()).resolves.toBe("peanut butter");
});

// code 5
test("the data is peanut butter", async () => {
  const data = await fetchDataPromise();
  expect(data).toBe("peanut butter");
});

// code 6
test("the fetch fails with an error", async () => {
  await expect(fetchDataPromise()).resolves.toBe("peanut butter");
});
