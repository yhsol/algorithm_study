import collections


def no_duplicated(s: str) -> str:
    formatted = []
    for item in s:
        if item in formatted:
            formatted.pop(formatted.index(item))
        else:
            formatted.append(item)
    return sorted(formatted)


def no_duplicated_stack(s: str) -> str:
    counter, seen, stack = collections.Counter(s), set(), []

    for char in s:
        counter[char] -= 1
        if char in seen:
            continue

        # stack 이 남아있고,
        # stack 의 마지막 값 보다 char 가 작고,
        # stakc 의 마지막 값이 뒤에 남아있을 때
        while stack and char < stack[-1] and counter[stack[-1]] > 0:
            seen.remove(stack.pop())

        stack.append(char)
        seen.add(char)

    return ''.join(stack)
