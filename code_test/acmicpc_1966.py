import sys
from collections import deque

K = int(sys.stdin.readline())


def solution():
    (N, M) = map(int, sys.stdin.readline().split(" "))
    valueCount = deque(list(map(int, sys.stdin.readline().split(" "))))
    biggest = max(valueCount)

    for i in len(valueCount):
        if valueCount[i] == biggest:
            valueCount.pop()
            if valueCount[i] == M:
                print(i)
        else:
            valueCount.append(valueCount.popleft())


for i in range(K):
    print(solution())
