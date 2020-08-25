N = int(input())
a = []

for _ in range(N):
    a.append(list(input().split()))

a.sort(key=lambda data: (int(data[0])))

for [i, j] in a:
    print(i, j)
