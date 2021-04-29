from typing import Deque, List


def isValid(data: str) -> bool:
    stack = []
    valid_dict = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for char in data:
        if char not in valid_dict:
            stack.append(char)
        elif not stack or valid_dict[char] != stack.pop():
            return False

    return len(stack) == 0


def isValid2(data: str) -> bool:
    stack = []
    valid_dict = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for char in data:
        if char in valid_dict:
            stack.append(char)
        elif not stack or char != valid_dict[stack.pop()]:
            return False

    return len(stack) == 0


def uniqueOrder(data: str) -> str:
    unique = set(list(data))
    ordered = sorted(unique)
    str_data = "".join(ordered)
    return str_data


def warmer(T: List[int]) -> List[int]:
    results = []

    for i in range(len(T) - 1):
        for j in range(i+1, len(T)):
            temp = 0
            if T[i] < T[j]:
                temp = j - i
                break
        if temp:
            results.append(temp)
        else:
            results.append(0)

    return results


class StackBuildWithQueue:
    def __init__(self):
        self.data = []

    def push(self, x):
        self.data.append(x)

    def pop(self):
        return self.data.pop(0)

    def top(self):
        return self.data[0]

    def empty(self):
        return len(self.data) == 0


stack = StackBuildWithQueue()
print(stack.push(1))
print(stack.push(2))
print(stack.top())
print(stack.pop())
print(stack.empty())
print(stack.data)

# print(warmer([73, 74, 75, 69, 72, 76, 73]))
