def factorial(N):
    result = 1
    for i in range(1, N+1):
        result = result * i
    return result


def factorial_recursive(N):
    if N <= 1:
        return 1
    return N * factorial_recursive(N-1)


def sum(N):
    result = 0
    for i in range(1, N+1):
        result += i
    return result


def sum_recursive(N):
    if N <= 1:
        return 1
    return N + sum_recursive(N-1)


def find_max(arr):
    max_idx = 0
    for i in range(len(arr)):
        if arr[max_idx] < arr[i]:
            max_idx = i
    return arr[max_idx]


def find_max_recursive(arr):
    print("need to check")


def fibo(N):
    if N <= 1:
        return N
    return fibo(N-2) + fibo(N-1)


N = int(input())
arr = [1, 2, 3, 4, 5]
print(fibo(N))
