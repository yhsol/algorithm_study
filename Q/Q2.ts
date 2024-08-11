// leetcode 344.

/**
 Do not return anything, modify s in-place instead.
 */

const s = ["h", "e", "l", "l", "o"];

function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const l = s[left];
    const r = s[right];
    s[left] = r;
    s[right] = l;
    left++;
    right--;
  }
}

console.log(reverseString(s));
