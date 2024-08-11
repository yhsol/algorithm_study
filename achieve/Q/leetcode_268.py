def sum(inputs: list) -> int:
    result = 0

    n = len(inputs)

    for i in inputs:
        result ^= i

    for i in range(n+1):
        result ^= i

    return result


# 3 0 1
# 0 1 2 3
# 2
print(sum([3, 0, 1]))

s = '98678967'
print(''.join(reversed(s)))
