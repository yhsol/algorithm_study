# process

# F(n) = F(n-1) + F(n-2)

N = int(input())


def fibo(n):
    if n <= 1:
        return n

    return fibo(n-1) + fibo(n-2)


print(fibo(N))