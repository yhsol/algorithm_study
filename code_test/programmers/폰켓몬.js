function solution(nums) {
  var answer = 0;
  let list = [];
  nums.forEach((item) => {
    if (!list.includes(item)) {
      list.push(item);
    }
  });
  answer = list.length;
  let limit = nums.length / 2;
  answer = answer < limit ? answer : limit;
  return answer;
}
