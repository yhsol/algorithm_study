N = int(input())
a = []
for _ in range(N):
    a.append(list(map(int, input().split())))

# 정렬 조건: 첫번째 인자를 먼저 정렬하고, 그 안에서 두번째 인자에 따라 정렬
a.sort(key=lambda data: (data[0], data[1]))

for [i, j] in a:
    print(i, j)

# N = int(input())
# a = []
# for _ in range(N):
#     a.append(list(map(int, input().split())))

# a.sort(key=lambda data: (data[0], data[1]))

# for [i, j] in a:
#     print(i, j)
