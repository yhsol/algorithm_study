# 환형 큐

## 큐 (Queue) 의 활용

- 자료를 생성하는 작업과 그 자료를 이용하는 작업이
  비동기적으로 (asynchronously) 일어나는 경우
- 자료를 생성하는 작업이 여러 곳에서 일어나는 경우
- 자료를 이용하는 작업이 여러 곳에서 일어나는 경우
- 자료를 생성하는 작업과 그 자료를 이용하는 작업이
  양쪽 다 여러 곳에서 일어나는 경우
- 자료를 처리하여 새로운 자료를 생성하고,
  나중에 그 자료를 또 처리해야 하는 작업의 경우

## 환형 큐 (Circular Queue)

- 정해진 개수의 저장 공간을 빙 돌려가며 이용
- 큐가 가득 차면? -> 더이상 원소를 넣을 수 없음 (큐 길이를 기억하고 있어야)

## 환형 큐의 추상적 자료구조 구현

연산의 정의

- size() - 현재 큐에 들어 있는 데이터 원소의 수를 구함
- isEmpty() - 현재 큐가 비어 있는지를 판단
- isFull() - 큐에 데이터 원소가 꽉 차 있는지를 판단
- enqueue(x) - 데이터 원소 x 를 큐에 추가
- dequeue() - 큐의 맨 앞에 저장된 데이터 원소를 제거 (또한, 반환)
- peek() - 큐의 맨 앞에 저장된 데이터 원소를 반환 (제거하지 않음)

## 배열로 구현한 환형 큐

- 정해진 길이 n (예에서는 6) 의 리스트를 확보해 두고
- Q.enqueue(A) => [A(rear), _, _, _, _, _]
- Q.enqueue(B) => [A, B(rear), _, _, _, _]
- Q.enqueue(C) => [A, B, C(rear), _, _, _]
- Q.enqueue(D) => [A, B, C, D(rear), _, _]
- r1 = Q.dequeue() => [A(front), B, C, D(rear), _, _] => A 반환 => [empty(front), B, C, D(rear), _, _]
- r2 = Q.dequeue() => B => [empty, empty, C, D(rear), _, _]
- Q.enqueue(E) => [empty, empty(front), C, D, E(rear), _]
- Q.enqueue(F) => [empty, empty(front), C, D, E, F(rear)] -> isFull ? false
- Q.enqueue(G) => [G(rear), empty(front), C, D, E, F]
- r3 = Q.dequeue() => [G(rear), empty, C(front), D, E, F] -> C 반환 => [G(rear), empty, empty(front), D, E, F]
- front 와 rear 를 적절히 계산하여 배열을 환형으로 재활용
- 배열로 구현한 환형 큐

```py
class CircularQueue:

    def __init__(self, n):    # 빈 큐를 초기화
        self.maxCount = n     # 인자로 주어진 최대 큐 길이 설정
        self.data = [None] * n
        self.count = 0
        self.front = -1
        self.rear = -1

    def size(self):    # 현재 큐 길이를 반환
        return self.count

    def isEmpty(self):    # 큐가 비어 있는가?
        return self.count == 0

    def isFull(self):    # 큐가 꽉 차 있는가?
        return self.count == self.maxCount

    def enqueue(self, x):    # 큐에 데이터 원소 추가
        if self.isFull():
            # IndexError('Queue full') exception 으로 처리
        self.rear = [빈칸] # rear 가 있으면 rear 다음, 없으면 0, rear == maxCount - 1 이면 0 이면 되지 않으려나?
        # 라고 생각했는데 한줄이라고..???ㅋㅋㅋㅋㅋ
        # 한줄이라.. 한줄에 rear 를 어떻게 계산하면 좋을까나...
        # 1. rear + 1
        # 2. rear == (maxCount - 1) 이면 0으로!
        # 둘 다 필요할 거 같은데 한줄에 되나..???
        self.data[self.rear] = x
        self.count += 1

    def dequeue(self):    # 큐에서 데이터 원소 뽑아내기
        if [빈칸]: # 큐가 비어있는지 확인하면 되지 않으려나? isEmpty
            raise IndexError('Queue empty')
        self.front = [빈칸] # front + 1? 얘도 꽉차면 0으로?
        x = [빈칸] # self.data.pop[front]
        self.count -= 1
        return x

    def peek(self):    # 큐의 맨 앞 원소 들여다보기
        if [빈칸]: # 큐가 비어있는지
              raize IndexError('Queue empty')
        return [빈칸] # self.data[front]
```
