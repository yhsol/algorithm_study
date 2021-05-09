class CircularQueue:

    def __init__(self, n):
        self.maxCount = n
        self.data = [None] * n
        self.count = 0
        self.front = -1
        self.rear = -1

    def size(self):
        return self.count

    def isEmpty(self):
        return self.count == 0

    def isFull(self):
        return self.count == self.maxCount

    def enqueue(self, x):
        if self.isFull():
            raise IndexError('Queue full')
        self.rear = 0 if self.rear == self.maxCount - 1 else self.rear + 1
        # self.rear = (self.rear + 1) % self.maxCount 도 가능
        # maxCount 는 마지막 인덱스보다 하나가 더 크다 (인덱스가 아니니까)
        # 그러면 마지막 인덱스 + 1 은 maxCount 가 된다는 말
        # % 는 나머지를 구해주고, 값을 같은 값으로 나눈 나머지는 0이 되므로 자연스레 rear 는 0이 됨.
        # 그리고, 나눠지는 값이 나누는 값보다 작을경우 나머지는 나눠지는 값 그대로가 됨.
        # 그러므로 rear 는 self.rear + 1 이 됨.
        self.data[self.rear] = x
        self.count += 1

    def dequeue(self):
        if self.isEmpty():
            raise IndexError('Queue empty')
        self.front = 0 if self.front == self.maxCount - 1 else self.front + 1
        x = self.data[self.front]
        self.count -= 1
        return x

    def peek(self):
        if self.isEmpty():
            raise IndexError('Queue empty')
        return self.data[0 if self.front == self.maxCount - 1 else self.front + 1]


def solution(x):
    return 0
