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


print(warmer([73, 74, 75, 69, 72, 76, 73]))
