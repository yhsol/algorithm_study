# a = [1]
# b = [2, 3, 4, 5, 6, 7]
# c = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
# d = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37]
# e = [38 - 61]
# print(len(a), len(b), len(c), len(d))
# 7
# 19
# 37
# print(7 - 1)
# print(19 - 7)
# print(37 - 19)
# print(61 - 37)
N = int(input())
result = 1
x = 0
sum = 0

while True:
    if N == 1:
        result = 1
        break
    elif N <= 6 * sum + 1:
        result = x+1
        break
    sum += 1 + x
    x += 1

print(result)


# def solve(N):
#     if N < 6 * 0 + 1:
#         print(1)
#     elif N < 6 * 1 + 1:
#         print(2)
#     elif N < 6 * 3 + 1:
#         print(3)
#     elif N < 6 * 6 + 1:
#         print(4)
#     elif N < 6 * 10 + 1:
#         print(5)
#     elif N < 6 * 15 + 1:
#         print(6)


# solve(58)
