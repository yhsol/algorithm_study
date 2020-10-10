import sys


def push(x):
    stack.append(x)


def pop():
    if (not stack):
        return -1
    else:
        return stack.pop()


def size():
    return len(stack)


def empty():
    return 0 if stack else 1


def top():
    return stack[-1] if stack else -1


N = int(sys.stdin.readline().rstrip())
stack = []

for _ in range(N):
    n = sys.stdin.readline().rstrip().split()
    cmd = n[0]
    if cmd == "push":
        push(n[1])
    if cmd == "pop":
        print(pop())
    if cmd == "size":
        print(size())
    if cmd == "empty":
        print(empty())
    if cmd == "top":
        print(top())
