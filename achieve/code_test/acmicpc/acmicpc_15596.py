a = [1, 2, 3, 4, 5]


def solve(a: list):
    sum = 0
    for i in a:
        sum += i
    return sum


print(solve(a))
