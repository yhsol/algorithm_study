# Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is
# the smallest in lexicographical order among all possible results.
# Input: s = "bcabc"
# Output: "abc"
# Input: s = "cbacdcbc"
# Output: "acdb"

import collections


class Solution:
    def removeDuplicateLetters(self, s: str) -> str:

        result = ''

        for i, w in enumerate(s):
            rest = s[i+1:]
            # 문자가 rest 에 중복으로 있더라도 rest 에서 가장 작은 값일경우 여기서 추가함.
            if w in rest and min(rest) is w and w not in result:
                result += w
            elif w in rest and self.hasDuplicated(rest) is False:
                result += w
            elif w not in rest and w not in result:
                result += w

        return result

    def hasDuplicated(self, s: str) -> bool:
        for i, w in enumerate(s):
            rest = s[i+1:]
            if w in rest:
                return True
        return False

    def removeDuplicatedLettersByBook(self, s: str) -> str:
        counter, seen, stack = collections.Counter(s), set(), []

        print("counter: ", counter)
        print("seen: ", seen)
        print("stack: ", stack)

        for char in s:
            counter[char] -= 1  # why?
            if char in seen:
                continue


instance = Solution()
res = instance.removeDuplicateLetters('ecbacba')
print(res)

print(instance.hasDuplicated(['a', 'b', 'q', 'c']))
