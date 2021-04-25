# 큐 (Queue)

- 선형 구조
- 넣을 때는 한쪽 끝에서 밀어 넣고 -> 인큐(enqueue) 연산
- 꺼낼 때는 반대 쪽에서 꺼내야 함 -> 디큐(dequeue) 연산
- 선입선출 (FIFO - First-In First-Out) 특징을 가지는 선형 자료구조

## 큐의 동작

- 초기 상태: 비어 있는 큐 (empty queue)

```py
Q = Queue()
```

- 데이터 원소 A 를 큐에 추가

```py
Q.enqueue(A)
```

- 데이터 원소 B 를 큐에 추가

```py
Q.enqueue(B)
```

- 데이터 원소 꺼내기

```py
r1 = Q.dequeue()
# r1 => A
```

- 데이터 원소 또 꺼내기

```py
r2 = Q.dequeue()
# r2 => B
```

## 큐의 추상적 자료구조 구현

1. 배열 (array) 을 이용하여 구현
   - Python 리스트와 메서드들을 이용
2. 연결 리스트 (linked list) 를 이용하여 구현
   - 이전 강의에서 마련한 양방향 연결 리스트 이용

#### 연산의 정의

- size() - 현재 큐에 들어 있는 데이터 원소의 수를 구함 -> O(1)
- isEmpty() - 현재 큐가 비어 있는지를 판단 -> O(1)
- enqueue(x) - 데이터 원소 x 를 큐에 추가 -> O(1)
- dequeue() - 큐의 맨 앞에 저장된 데이터 원소를 제거 (또한, 반한) -> O(n) -> 맨 앞의 원소를 삭제하고, 뒤에 있는 자료들을 하나씩 앞으로 당겨주는 연산을 해야하게 때문
- peek() - 큐의 맨 앞에 저장된 데이터 원소를 반환 (제거하지 않음) -> O(1)

#### 배열로 구현한 큐

```py
class ArrayQueue:

    def __init__(self): # 빈 큐를 초기화
        self.data = []

    def size(self): # 큐의 크기를 리턴
        return len(self.data)

    def isEmpty(self):  # 큐가 비어 있는지 판단
        return self.size() == 0

    def enqueue(self, item):    # 데이터 원소를 추가
        self.data.append(item)

    def dequeue(self):  # 데이터 원소를 삭제 (리턴)
        returun self.data.pop(0)

    def peek(self): # 큐의 맨 앞 원소 반환
        return self.data[0]
```

#### 양방향 연결 리스트로 구현한 큐
