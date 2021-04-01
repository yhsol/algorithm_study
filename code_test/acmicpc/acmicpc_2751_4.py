import sys

N = int(sys.stdin.readline())
a = []
for _ in range(N):
    a.append(int(sys.stdin.readline()))

a = sorted(a)
a.reverse()
for i in a:
    print(i)
