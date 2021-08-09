def sum_one_to_n_recursive(n: int) -> int:
    if n <= 1:
        return n
    return n + sum_one_to_n_recursive(n-1)


def sum_one_to_n_loop(n: int) -> int:
    sum = 0
    while n >= 0:
        sum += n
        n -= 1
    return sum


def sum_one_to_n_math(n: int) -> int:
    return n * (n + 1) // 2


def fibonacci_recursive(n: int) -> int:
    if n <= 1:
        return n
    return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)


def fibonacci_loop(n: int) -> int:
    if n <= 1:
        return n

    nums = []
    for i in range(n+1):
        if i <= 1:
            nums.append(i)
        else:
            nums.append(nums[-2] + nums[-1])
    return nums[-1]


print(fibonacci_recursive(8))
