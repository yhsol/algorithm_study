function solution(n, lost, reserve) {
  let answer = n - lost.length;

  function updateFn(item) {
    answer += 1;
    reserve.splice(reserve.indexOf(item), 1);
    lost[lost.indexOf(item)] = null;
  }

  // 자기 자신 체육복 케이스 먼저 해결
  for (let item of lost) {
    if (reserve.includes(item)) updateFn(item);
  }

  // 앞, 뒤 다 가능한 경우는 skip, 하나씩 포함하는 경우만 처리
  for (let item of lost) {
    if (reserve.includes(item - 1) && reserve.includes(item + 1)) continue;
    else if (reserve.includes(item + 1)) updateFn(item + 1);
    else if (reserve.includes(item - 1)) updateFn(item - 1);
  }

  // 앞, 뒤 가능한 경우 처리
  for (let item of lost) {
    if (reserve.includes(item + 1)) updateFn(item + 1);
    else if (reserve.includes(item - 1)) updateFn(item - 1);
  }

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
