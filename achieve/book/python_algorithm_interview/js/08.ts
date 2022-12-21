// algorithm: Math.min(maxL, maxR) - currentHeight

class Solution {
  constructor() {}

  trap(height: number[]): number {
    if (!height.length) return 0;

    let result = 0;
    let left = 0;
    let maxL = height[left];
    let right = height.length - 1;
    let maxR = height[right];

    while (left < right) {
      let value = 0;
      if (maxL < maxR) {
        left += 1;
        const curr = height[left];
        value = maxL - curr;
        maxL = Math.max(maxL, curr);
      } else {
        right -= 1;
        const curr = height[right];
        value = maxR - curr;
        maxR = Math.max(maxR, curr);
      }

      if (value > 0) {
        result += value;
      }
    }

    return result;
  }
}

console.log(new Solution().trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
