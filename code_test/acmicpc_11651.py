N = int(input())
a = []
for _ in range(N):
    a.append(list(map(int, input().split())))

a.sort(key=lambda data: (data[1], data[0]))

for [i, j] in a:
    print(i, j)
