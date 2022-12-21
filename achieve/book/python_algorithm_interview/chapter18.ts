function search(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function intersection(nums1: number[], nums2: number[]): Set<number> {
  let result: Set<number> = new Set();
  for (let n1 of nums1) {
    for (let n2 of nums2) {
      if (n1 === n2) {
        result.add(n1);
      }
    }
  }
  return result;
}

function bisect(sortedList: any, el: any): any {
  if (!sortedList.length) return 0;

  if (sortedList.length === 1) {
    return el > sortedList[0] ? 1 : 0;
  }

  let lbound = 0;
  let rbound = sortedList.length - 1;
  return bisect(lbound, rbound);
}

function intersectionBs(nums1: number[], nums2: number[]): Set<number> {
  let result: Set<number> = new Set();
  let sortedNums2 = nums2.sort();
  for (let n1 of nums1) {
    let i2 = bisect(nums2, n1);
    if (nums2.length > 0 && nums2.length > i2 && n1 === sortedNums2[i2]) {
      result.add(n1);
    }
  }
  return result;
}

function intersectionTwoPointer(nums1: number[], nums2: number[]): Set<number> {
  let result: Set<number> = new Set();

  // 양쪽 모두 정렬
  let sortedNums1 = nums1.sort();
  let sortedNums2 = nums2.sort();
  let i = 0;
  let j = 0;
  // 투 포인터 우측으로 이동하며 일치 여부 판별
  while (i < sortedNums1.length && j < sortedNums2.length) {
    if (sortedNums1[i] > sortedNums2[j]) {
      j += 1;
    } else if (sortedNums1[i] < sortedNums2[j]) {
      i += 1;
    } else {
      result.add(sortedNums1[i]);
      i += 1;
      j += 1;
    }
  }

  return result;
}

function twoSum(numbers: number[], target: number): number[] {
  let start = 0;
  let end = numbers.length - 1;

  while (start !== end) {
    const sum = numbers[start] + numbers[end];
    if (sum < target) {
      start += 1;
    } else if (sum > target) {
      end -= 1;
    } else {
      return [start + 1, end + 1];
    }
  }
  return [-1];
}

function run() {
  // const f = search([-1, 0, 3, 5, 9, 12], 9);
  //   const f = intersectionBs([1, 2, 2, 1], [2, 2]);
  const f = twoSum([2, 7, 11, 15], 9);
  console.log("result: ", f);
}
run();
