class Solution:
    def longestPalindrome(self, s: str) -> str:
        palindrome = ''
        n = len(s)

        if n <= 1 or s == s[::-1]:
            return s

        for i in range(n-1):
            for j in range(i+1, n + 1):
                text = s[i:j]
                reversed_text = text[::-1]
                if text == reversed_text and len(text) > len(palindrome):
                    palindrome = text

        return palindrome


print(Solution.longestPalindrome(Solution, "ac"))
