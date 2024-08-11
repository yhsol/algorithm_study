function arrayPairSum(nums: number[]): number {
  let res = 0;

  nums.sort((a, b) => a - b);

  nums.forEach((v, i) => {
    if (i % 2 === 0) res += v;
  });

  return res;
}

const nums = [1, 4, 3, 2];
console.log(arrayPairSum(nums));
//=> 4
