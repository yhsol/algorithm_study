// 이 방법은 배열을 앞으로 나아가면서 이전 값보다 큰 지점이다. 즉 변곡점이다 하면 거기서 뒤를 돌아서
// 그 전까지의 숫자들을 모아놨던 배열과 비교를 하면서 지금 내가 더 커졌으니까 이전 값들과 한번 비교를 싹 해보자.
// 그러면 이전 값들은 일단 이 변곡점 값보다 작을 것이고. 이 변곡점과 차이가 얼마인지가 정답인 다음 더 높은 날짜를
// 만날 때 까지 걸리는 일 수 가 되는 것.
// 그렇게 해서 다 비교를 했는데 스택에 남아있으면 0으로 처리.
// 여기서 또 포인트는 스택에 index 를 담으둠으로써 정답 배열의 그 index 지점에 답을 입력해서 제출하는 것.

// 이런 사고 방식으로 문제를 푸는게 참 신기함.
// 이렇게 답에 접근해야지 하는 사고 방식을 배워야 하는데 말이지.
const dailyTemperatures = (temperatures: number[]) => {
  let res = Array.from<number>({ length: temperatures.length }).fill(0);
  let stack: number[] = [];

  temperatures.forEach((v, i) => {
    while (stack.length && v > temperatures[stack[stack.length - 1]]) {
      let last = stack.pop();
      if (last !== undefined) {
        res[last] = i - last;
      }
    }
    stack.push(i);
  });

  return res;
};

console.log(
  "dailyTemperatures: ",
  dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
);
// answer
// [1, 1, 4, 2, 1, 1, 0, 0]
