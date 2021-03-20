function solution(nums) {
  var answer = 0;
  let seted = new Set(nums);
  let size = seted.size;
  let limit = nums.length / 2;
  answer = size < limit ? size : limit;
  return answer;
}
