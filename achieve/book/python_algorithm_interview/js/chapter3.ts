function twoSum(nums: number[], target: number): number[] {
  let result = [];
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) result.push(i, j);
    }
  }
  return result;
}

function twoSum2(nums: number[], target: number): number[] {
  let result = [];
  for (let [i, v] of nums.entries()) {
    let rest = target - v;
    let sliced = nums.slice(i + 1);
    if (sliced.includes(rest)) result.push(i, sliced.indexOf(rest) + i + 1);
  }
  return result;
}

function twoSum3(nums: number[], target: number): number[] {
  let result = [];
  let numsDict: Record<string, number> = {};
  // v - i 객체 생성
  for (let [i, v] of nums.entries()) numsDict[v] = i;
  // rest 값 활용
  // rest 가 numsDict 에 존재하고, rest 에 매핑되어 있는 index 가 반복문의 i 와 다를 때 리턴.
  for (let [i, v] of nums.entries()) {
    const rest = target - v;
    if (rest in numsDict && i != numsDict[rest]) result.push(i, numsDict[rest]);
  }
  return result;
}

function twoSum4(nums: number[], target: number): number[] {
  let result = [];
  let numsDict: Record<string, number> = {};
  for (let [i, v] of nums.entries()) {
    const rest = target - v;
    if (rest in numsDict) result.push(numsDict[rest], i);
    numsDict[v] = i;
  }
  return result;
}

// 정렬되지 않은 배열이기 때문에 투 포인터를 사용하기 힘듦.
// 기존 배열에서 indexOf 를 통해 찾고, 다음 index 는 먼저 찾은 인덱스가 아니면서, 일치하는 값의 인덱스를 리턴함으로써,
// 답을 낼 수는 있지만 추가 연산이 많아져서인지 속도는 dict 방법에 비해 빠르지 않음.
function twoSum5(nums: number[], target: number): number[] {
  let sorted = [...nums].sort((a, b) => a - b);
  let start = 0;
  let end = sorted.length - 1;
  while (start < end) {
    const sum = sorted[start] + sorted[end];
    if (sum === target) {
      const front = nums.indexOf(sorted[start]);
      const rear = nums.findIndex(
        (num, index) => index !== front && num === sorted[end]
      );
      return [front, rear];
    }
    if (sum > target) end -= 1;
    if (sum < target) start += 1;
  }
  return [];
}

console.log("twoSum: ", twoSum5([3, 2, 3], 6));

function trap(height: number[]): number {
  let result = 0;

  return result;
}
