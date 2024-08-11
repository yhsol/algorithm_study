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

    def isValidByChatGPT(self, s: str) -> bool:

        # 1. 여는 괄호를 닫는 괄호에 매핑하는 사전을 정의
        dict = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        stack = []

        for char in s:
            # opening brackets
            if char in dict.values():
                stack.append(char)
            # closing brackets
            elif char in dict.keys():
                if not stack or stack.pop() != dict[char]:
                    return False
            # not opening brackets and not closing brackets
            # 그치 value 도 아니고 key 도 아니면 False 지.
            else:
                return False

        return not stack  # 똑똑하당. 이렇게 체크해서 리턴해버리면 되는 군.

    def isValidBetterPerformanceWithChatGPT(self, s: str):
        opening_brackets = '([{'
        closing_brackets = ')]}'

        stack = []

        for char in s:
            if char in opening_brackets:
                stack.append(char)
            else:
                if len(stack) == 0 or closing_brackets.index(char) != opening_brackets.index(stack.pop()):
                    return False

        return len(stack) == 0


solution = Solution().isValidBetterPerformanceByChatGPT('(){}[]')
