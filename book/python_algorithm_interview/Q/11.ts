function productExceptSelf(nums: number[]): number[] {
  let out = [];
  let p = 1;
  for (let i = 0; i < nums.length; i++) {
    out.push(p);
    p = p * nums[i];
  }
  p = 1;
  for (let i = nums.length - 1; i > 0 - 1; i--) {
    out[i] = out[i] * p;
    p = p * nums[i];
  }
  return out;
}

console.log(productExceptSelf([1, 2, 3, 4]));
