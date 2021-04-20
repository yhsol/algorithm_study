# 스택, 큐

- 파이썬은 스택 자료형을 별도로 제공하지는 않지만, 리스트가 사실상 스택의 모든 연산을 지원함
- 큐 또한 마찬가지
- 다만 리스트는 동적 배열로 구현되어 있어 큐의 연산을 수행하기에는 효율적이지 않기 때문에, 큐를 위해서는 데크(Deque)라는 별도의 자료형을 사용해야 좋은 성능을 낼 수 있다.

## 스택

스택(Stack)은 다음과 같은 2가지 주요 연산을 지원하는 요소의 컬렉션으로 사용되는 추상 자료형이다.

- push(): 요소를 컬렉션에 추가
- pop(): 아직 제거되지 않은 가장 최근에 삽입된 요소를 제거

### 연결 리스트를 이용한 스택 ADT 구현

- 연결 리스트를 담을 Node 클래스부터 정의
  - 노드의 값은 item, 다음 노드를 가리키는 포인터는 next

```py
class Node:
    def __init__(self, item, next):
        self.item = item
        self.next = next
```

- 스택의 연산인 push()와 pop()을 담은 Stack 클래스 정의
  - push()는 연결 리스트에 요소를 추가하면서 가장 마지막 값을 next로 지정하고, 포인터인 last는 가장 마지막으로 이동시킨다.
  - pop()은 가장 마지막 아이템을 끄집어내고 last 포인터를 한 칸 앞으로 전진시킨다. 즉 이전에 추가된 값을 가리키게 한다.

```py
class Stack:
    def __init__(self):
        self.last = None

    def push(self, item):
        self.last = Node(item, self.last)

    def pop(self):
        item = self.last.item
        self.last = self.last.next
        return item
```

- 1부터 5까지 값을 스택에 입력해보자

```py
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
```

- stack 은 각각 이전 값을 가리키는 연결 리스트로 구현되어 있으며, 가장 마지막 값은 last 포인터가 가리킨다.

- pop() 메소드로 스택의 값을 차례대로 출력해보자

```py
for _ in range(5):
    print(stack.pop())
```

20. 유효한 괄호
    문제: 괄호로 된 입력값이 올바른지 판별하라
    풀이:
    - (, {, [ 는 stack 에 푸시
    - ), }, ] 를 만나면 pop 해서 매핑 테이블 결과와 매핑 되는지 확인
    - 매핑 테이블을 만들어 놓고 매핑 테이플에 없으면 stack 에 푸시
    - 매핑 테이블에 있는 값이고, stack 에도 값이 있으면 비교
    - 마지막에는 stack 에 남아있는 값이 있는지 여부에 따라 bool 값 리턴
    - 매핑 테이블은 dict 로 만드는데, `if char not in valid_dict: `와 같이 쓸 경우 `char`와 비교하는 대상은 `valid_dict`의 `key` 값
    - 그래서 `key`값에 ), }, ] 를 넣음
    - 꼭 그래야 하는 건 아니고 그래야 풀이가 간편함 (그래야 닫는 괄호를 만났을 때 닫는 괄호로 dict 에서 값을 조회하고, stack 에서 pop 한 값이랑 비교)
    - dict 를 반대로 한다면 닫는 괄호와 `valid_dict[stack.pop()]` 를 비교하는 형태로 하면 됨.
