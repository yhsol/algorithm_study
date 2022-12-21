class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        answer = 0
        length = len(s)

        if length == 1:
            return 1

        for i in range(length - 1):
            sub = s[i]
            for j in range(i + 1, length):
                if s[j] not in sub:
                    sub += s[j]
                else:
                    break
            if answer < len(sub):
                answer = len(sub)
        return answer


print(Solution.lengthOfLongestSubstring("", "abcdeabc"))
