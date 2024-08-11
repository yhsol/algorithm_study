// leetcode 125. Valid Palindrome
const s = "A man, a plan, a canal: Panama";

function isPalindrome(s: string): boolean {
  s = s.toLowerCase();
  let cleaned: string = "";
  for (let char of s) {
    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      cleaned += char;
    }
  }

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome(s));
