N = int(input())

arr = []

for _ in range(N):
    arr.append(input())


def samename(arr):
    result = set()
    stack = []
    temp = []

    for i in arr:
        stack.append(i)

    while stack:
        selected = stack.pop()
        if selected in temp:
            result.add(selected)
        temp.append(selected)

    return result


print(samename(arr))
