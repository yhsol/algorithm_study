# 1 부터 n 까지의 합 구하기

n = int(input())


def sum(n):
    result = 0
    for i in range(1, n+1):
        result += i
    return result


def sum2(n):
    return n * (n + 1) // 2


def multiple_sum(n):
    result = 0
    for i in range(1, n+1):
        result += i*i
    return result


def multiple_sum2(n):
    return n * (n+1) * (2*n+1) // 6


print(multiple_sum2(n))
