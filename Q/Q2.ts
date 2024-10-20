// leetcode 344.

/**
 Do not return anything, modify s in-place instead.
 */

const s = ["h", "e", "l", "l", "o"];

function reverseString(s: string[]): void {
  s.reverse();
}

function reverseString2(s: string[]): void {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let copiedLeft = s[left];
    let copiedRight = s[right];
    s[left] = copiedRight;
    s[right] = copiedLeft;
    left++;
    right--;
  }
}

function reverseString3(s: string[]): void {
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}

console.log(reverseString2(s));
