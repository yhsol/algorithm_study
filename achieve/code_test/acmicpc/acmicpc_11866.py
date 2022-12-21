import sys
from collections import deque

[N, T] = list(map(int, list(sys.stdin.readline().split(" "))))


def solution(N, T):
    answer = ""
    arr = deque([i for i in range(1, N+1)])
    key = T - 1
    while len(arr) > 1:
        for _ in range(key):
            arr.append(arr.popleft())
        answer += str(arr.popleft()) + ", "
    if len(arr) == 1:
        answer += str(arr.pop())
    return "<" + answer + ">"


print(solution(N, T))
