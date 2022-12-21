from typing import List


def str_reverse(s: List[str]) -> None:
    s.reverse()


def str_reverse_loop(s: List[str]) -> None:
    pivot = len(s) // 2
    for i in range(pivot):
        key = -(i+1)
        s[i], s[key] = s[key], s[i]


def str_reverse_reverse(s: List[str]) -> None:
    front, rear = 0, len(s) - 1
    while front < rear:
        s[front], s[rear] = s[rear], s[front]
        front += 1
        rear -= 1


s = list("test")
str_reverse_reverse(s)
print(s)
