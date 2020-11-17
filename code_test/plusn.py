def plusn(n):
    result = 0
    for i in range(1, n+1):
        result += i

    return result


def plusn2(n):
    return n * (n+1) // 2


def multiplen(n):
    result = 0
    for i in range(1, n+1):
        result += i*i

    return result


def multiplen2(n):
    return n * (n + 1) * (2*n + 1) // 6


print(multiplen2(10))
