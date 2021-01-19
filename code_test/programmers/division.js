function solution(arr, divisor) {
  var answer = [];
  for (let i of arr) {
    if (i % divisor === 0) {
      answer.push(i);
    }
  }
  if (answer.length > 0) {
    return answer.sort((a, b) => a - b);
  }
  return [-1];
}

console.log(solution([5, 9, 7, 10], 5));
