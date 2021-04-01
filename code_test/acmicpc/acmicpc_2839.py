N = int(input())

# 18
# 5 + 5 + 5 + 3
# 18 / 5 = 3

# big = N // 5
# # print(big)
# rest = N - (big*5)
# small = rest // 3
# result = big + small

# small_2 = N // 3
# rest_2 = N - (small*3)
# big_2 = rest // 5
# result_2 = small_2 + big_2

# if (5*big + 3*small) == N:
#     print(result)
# elif (N % 5) == 0:
#     print(N // 5)
# elif (N % 3) == 0:
#     print(N // 3)
# elif (5*big_2 + 3*small_2) == N:
#     print(result_2)
# else:
#     print(-1)


# (5 * i) + (3 * j) = N

# if N == 5
# for i in range()
if N == 1:
    print(-1)
elif N == 2:
    print(-1)
elif N == 4:
    print(-1)
elif N == 7:
    print(-1)
elif N == 3:
    print(1)
elif N == 5:
    print(1)
elif N % 5 == 0:
    print(N // 5)
elif N % 5 == 1:
    print(N // 5 + 1)
elif N % 5 == 2:
    print(N // 5 + 2)
elif N % 5 == 3:
    print(N // 5 + 1)
elif N % 5 == 4:
    print(N // 5 + 2)
else:
    print(-1)

N = int(input())
i = 0

while True:
    if (N % 5) == 0:
        i = i + (N // 5)
        print(i)
        break
    N = N-3
    i = i + 1
    if i < 0:
        print(-1)
        break
