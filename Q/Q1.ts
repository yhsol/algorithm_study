const S = "A man, a plan, a canal: Panama";

function isPalindrome(s: string): boolean {
  if (s.trim() === "") {
    return true;
  }

  const re = /[^a-zA-Z0-9]/g;
  const filtered = s.replace(re, "").toLowerCase();

  let left = 0;
  let right = filtered.length - 1;

  while (left < right) {
    if (filtered[left] === filtered[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome(S));

function isPalindrome2(s: string): boolean {
  const re = /[^a-zA-Z0-9]/g;
  const filtered = s.replace(re, "").toLowerCase();
  const reveresed = filtered.split("").reverse().join("");
  return filtered === reveresed;
}
