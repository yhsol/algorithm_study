# 초기화
# def __init__(self, k: int):
#     self.q = [None] * k # 큐의 크기 설정
#     self.maxlen = k # 큐의 최대 길이 설정
#     self.front = 0 # front 포인터
#     self.rear = 0 # rear 포인터

# enQueue() - 요소 삽입
# def enQueue(self, value: int) -> bool:
# if self.q[self.rear] is None:
# self.q[self.rear] = value # rear 에 값을 넣음
# self.rear = (self.rear + 1) % self.maxlen # 전체 길이를 벗어 나지 않는 범위에서 rear 포인터를 한 칸 앞으로 이동
# return True
# else: # rear 포인터 위치가 None이 아니라면 다른 요소가 있는 공간이 꽉 찬 상태이거나 비정상적인 경우이므로 False를 리턴
# return False

# deQueue() - 요소 삭제
# def deQueue(self) -> bool:
# if self.q[self.front] is None:
# return False
# else:
# self.q[self.front] = None # front 포인터 위치에 None을 넣어 삭제
# self.front = (self.front + 1) % self.maxlen # 최대 길이를 넘지 않는 범위에서 포인터 한 칸 앞으로 이동
# return True
# 정리: enQueue() 는 rear 포인터를 이동, deQueue() 는 front 포인터를 이동


class MyCircularQueue:
    def __init__(self, k: int):
        self.q = [None] * k
        self.maxlen = k
        self.front = 0
        self.rear = 0

    # enQueue(): rear 포인터 이동
    def enQueue(self, value: int) -> bool:
        if self.q[self.rear] is None:
            self.q[self.rear] = value
            self.rear = (self.rear + 1) % self.maxlen
        else:
            return False

    # deQueue(): front 포인터 이동
    def deQueue(self) -> bool:
        if self.q[self.front] is None:
            return False
        else:
            self.q[self.front] = None
            self.front = (self.front + 1) % self.maxlen
            return True

    def Front(self) -> int:
        return -1 if self.q[self.front] is None else self.q[self.p1]

    def Rear(self) -> int:
        return -1 if self.q[self.rear - 1] is None else self.q[self.rear - 1]

    def isEmpty(self) -> bool:
        return self.front == self.rear and self.q[self.front] is None

    def isFull(self) -> bool:
        return self.front == self.rear and self.q[self.front] is not None
