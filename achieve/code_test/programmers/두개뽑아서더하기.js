function solution(numbers) {
  var answer = [];
  let n = numbers.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum = numbers[i] + numbers[j];
      if (!answer.includes(sum)) {
        answer.push(sum);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}
