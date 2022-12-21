function solution(arr) {
  var answer = [];

  for (let i of arr) {
    if (answer.length == 0) {
      answer.push(i);
    }
    if (answer[answer.length - 1] !== i) {
      answer.push(i);
    }
  }

  return answer;
}
