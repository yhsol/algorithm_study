# ([]{}) 이런 경우도 있을 수도?


def valid(d: str) -> bool:
    stack = []
    table = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    for item in d:
        if item not in table:
            stack.append(item)
        elif table[item] != stack.pop():
            return False
    return len(stack) == 0


valid("()[]{}")
