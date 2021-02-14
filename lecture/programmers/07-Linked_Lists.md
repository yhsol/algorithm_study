# 연결 리스트(Linked Lists)

## 추상적 자료구조 (Abstract Data Structures)

- Data

  - 정수, 문자열, 레코드, ...

- A set of operations
  - 삽입, 삭제, 순회, ...
  - 정렬, 탐색, ...

## 기본적 연결 리스트

- `67 -> 34 -> 58` 과 같이 data 가 늘어져 있는데 각각의 요소가 다음으로 연결 (`->`) 되어 있음
- 각각의 요소 즉, 예를들어 `67` 을 하나의 Node 라고 하며 Node 는 Data 와 Link (next) 를 포함한다.
- Node 내의 데이터는 다른 구조로 이루어질 수 있음 (e.g. 문자열, 레코드, 또 다른 연결 리스트 등)
- 리스트의 맨 앞을 'Head', 맨 끝을 'Tail' 이라고 한다. # of nodes: 3 과 같은 방식으로 연결 리스트 안에 노드가 몇개 있는지 표현.

## 연결 리스트 만들기

- 노드 만들기

```py
class Node:
    def __init__(self, item): # constructor. 즉, 처음 생성 시.
        self.data = item # data 에는 item 을 담는다.
        self.next = None # next 는 아직 없기 때문에 None 을 대입한다.
```

- 연결 리스트 만들기

```py
class LinkedList:
    def __init__(self): # constructor. 즉, 처음 생성 시.
         # nodeCount 는 0으로 초기화하고,
         # head 와 tail 이 아무것도 가리키고 있지 않은 비어 있는 연결 리스트
        self.nodeCount = 0
        self.head = None
        self.tail = None
```

## 특정 원소 참조

- 원소들의 index 를 1 부터 시작하도록 함.  
  0 을 따로 빼어 다른 목적으로 사용하기 위함.

```py
def getAt(self, pos):
    if pos <= 0 or pos > self.nodeCount:
        return None

    i = 1
    curr = self.head
    while i < pos:
        curr = curr.next
        i += 1
    return curr
```

- 첫번재 인자가 `self` 로 주어진걸로 봐서 보통 function 이기보다는 어떤 클래스의 메서드 인 듯 하다. -> 이 메서드는 LinkedList 의 메서드.

## 배열과 비교한 연결 리스트

- 배열

  - 저장 공간(meomory): 연속한 위치에 데이터들이 놓인다. 그렇기 때문에 '몇 번째' 라고 했을 때 처음으로 부터 떨어진 거리를 가지고 찾아갈 수 있다.
  - 특정 원소 지칭: 매우 간편 - 연속한 위치에 있기 때문에 index를 사용하여 바로 지칭 가능. -> O(1)

- 연결 리스트
  - 저장 공간(memory): 각 노드들이 링크로 연결되어 있기때문에 각 노드들은 메모리 상에서 임의의 위치에 있어도 된다.
  - 특정 원소 지칭: 선형탐색과 유사 - `getAt` 에서 볼 수 있듯이 앞에서부터 하나하나하나 따라가서 k 번째 것을 찾아야 하기 때문. O(n)

### 실습 문제

- 순회
  - 마지막 Node 는 next 가 None 을 가리키고 있을 것이기 때문에 이 성질을 이용.

```py
def traverse(self):
    answer = []
    i = self.head

    while i is not None:
        answer.append(i.data)
        i = i.next

    return answer
```

```js
traverse(this):
    let answer = []
    let i = this.head

    while (i) {
        answer.push(i.data);
        i = i.next;
    }

    return answer;
```
