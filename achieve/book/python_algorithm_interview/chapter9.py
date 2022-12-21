from typing import Deque, List
import collections


def isValid(data: str) -> bool:
    stack = []
    valid_dict = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for char in data:
        if char not in valid_dict:
            stack.append(char)
        elif not stack or valid_dict[char] != stack.pop():
            return False

    return len(stack) == 0


def isValid2(data: str) -> bool:
    stack = []
    valid_dict = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for char in data:
        if char in valid_dict:
            stack.append(char)
        elif not stack or char != valid_dict[stack.pop()]:
            return False

    return len(stack) == 0


def uniqueOrder(data: str) -> str:
    unique = set(list(data))
    ordered = sorted(unique)
    str_data = "".join(ordered)
    return str_data


def warmer(T: List[int]) -> List[int]:
    results = []

    for i in range(len(T) - 1):
        for j in range(i+1, len(T)):
            temp = 0
            if T[i] < T[j]:
                temp = j - i
                break
        if temp:
            results.append(temp)
        else:
            results.append(0)

    return results


class StackBuildWithQueue:
    def __init__(self):
        self.data = []

    def push(self, x):
        self.data.append(x)

    def pop(self):
        return self.data.pop()

    def top(self):
        return self.data[-1]

    def empty(self):
        return len(self.data) == 0


class StackBuildWithQueueBook:
    def __init__(self):
        self.q = collections.deque()

    def push(self, x):
        self.q.append(x)
        for _ in range(len(self.q) - 1):
            self.q.append(self.q.popleft())

    def pop(self):
        return self.q.popleft()

    def top(self):
        return self.q[0]

    def empty(self):
        return len(self.q) == 0


stack = StackBuildWithQueueBook()
# print(stack.push(1))
# print(stack.push(2))
# print(stack.top())
# print(stack.pop())
# print(stack.empty())
# print(stack.q)

# print(warmer([73, 74, 75, 69, 72, 76, 73]))


class MyCircularQueueInBook:
    def __init__(self, k: int):
        self.queue = [None] * k
        self.maxlen = k
        self.front = 0
        self.rear = 0

    def enQueue(self, value: int) -> bool:
        if self.queue[self.rear] is None:
            self.queue[self.rear] = value
            self.rear = (self.rear + 1) % self.maxlen
            return True
        else:
            return False

    def deQueue(self):
        if self.queue[self.front] is None:
            return False
        else:
            self.queue[self.front] = None
            self.front = (self.front + 1) % self.maxlen
            return True

    def Front(self) -> int:
        return -1 if self.queue[self.front] is None else self.queue[self.front]

    def Rear(self) -> int:
        return -1 if self.queue[self.rear - 1] is None else self.queue[self.rear - 1]

    def isEmpty(self) -> bool:
        return self.front == self.rear and self.queue[self.front] is None

    def isFull(self) -> bool:
        return self.front == self.rear and self.queue[self.front] is not None
