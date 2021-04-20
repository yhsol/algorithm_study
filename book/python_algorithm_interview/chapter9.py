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


print(isValid('{test}{test}(test)[test]test]test'))
