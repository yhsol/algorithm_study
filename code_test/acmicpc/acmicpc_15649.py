import sys

N, M = list(map(int, sys.stdin.readline().split(" ")))


def solution(N, M):
    for i in range(M):
        for i in range(1, N-1):
            for j in range(i+1, N):
