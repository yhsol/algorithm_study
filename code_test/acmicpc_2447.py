# process
# 처음과 끝만 full
# 사이의 칸은 양 끝만 별

# 문제를 끝 까지 안읽음!
# 아래 풀이는 제귀는 아니지만 기존에 생각했던 문제를 풀 수 있는데 문제가 다름!

N = int(input())

# if index is 0 or N:
#     full star
# else:
#     start is only 0 and last index of line

for i in range(N):
    if (i == 0) or (i == N-1):
        print("*" * N)
    # elif i == N - 1:
    #     print("*" * N)
    else:
        print("*" + " " * (N - 2) + "*")


def print_star(n):
    if n == 0:
        return "*" * n
    return "*" + " " * (N - 2)
