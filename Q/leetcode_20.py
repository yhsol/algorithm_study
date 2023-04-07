# 괄호로 된 입력값이 올바른지 판별하라.
# ()[]{} => true
# '(', ')', '{', '}', '[' and ']'
class Solution:
    def isValid(self, s: str) -> bool:

        stack = []

        dict = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for c in s:
            if stack and dict[c] and c in dict and dict[c] in stack:
                if stack.pop() is not dict[c]:
                    return False
            else:
                stack.append(c)

        if len(stack):
            return False

        return True
    
solution = Solution().isValid('(){}[]')