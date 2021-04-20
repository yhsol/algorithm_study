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


print(uniqueOrder('abcdabcd'))
