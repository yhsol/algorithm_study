function sum(nums: number[]) {
  nums.sort();
  let res = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > 0 || (i > 0 && nums[i] === nums[i - 1])) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      if (right < nums.length - 1 && nums[right] === nums[right + 1]) {
        right--;
        continue;
      }

      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res = [...res, [nums[i], nums[left], nums[right]]] as any;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
}

const nums = [-5, -5, -4, -4, -2, -2, 0, 0, 0, 1, 1, 1, 3, 4, 4];
