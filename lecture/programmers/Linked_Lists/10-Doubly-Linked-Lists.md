# 양뱡향 연결 리스트 (Doubly Linked Lists)

한 쪽으로만 링크를 연결하지 말고, 양쪽으로!
-> 앞으로도 (next) 뒤로도 (prev) 진행 가능

-> Node 의 구조 확장

```py
class Node:
    def __init__(self, item):
        self.data = item
        self.prev = None
        self.next = None
```

리스트 처음과 끝에 dummy node 추가
-> 단방향 연결 리스트에는 head 에만 dummy node 를 뒀었다.
-> tail 에서 뒤로 돌아갈 수는 없기 때문에 마지막 위치에 node 를 삽입 한다거나 할 경우 tail 을 아는 것이 유리했기 때문.
-> 리스트 양 끝에 dummy node 를 추가할 때의 이점
-> 데이터를 담고 있는 node 들은 모두 같은 모양

```py
class DoublyLinkedList:
    def __init__(self, item):
        self.nodecount = 0
        self.head = Node(None)
        self.tail = Node(None)
        self.head.prev = None
        self.head.next = self.tail
        self.tail.prev = self.head
        self.tail.next = None
```

리스트 순화

```py
def traverse(self):
    result = []
    curr = self.head
    while curr.next.next:
        curr = curr.next
        result.append(curr.data)
    return result
```

- 빈 리스트의 경우
  - `curr.next.next` 는 `tail.next` 를 가리키기 때문에 `None` 이다.
    즉, `while` 문이 실행되지 않음.

리스트 역순회

```py
def reverse(self):
    result = []
    curr = self.tail
    while curr.prev.prev:
        curr = curr.prev
        result.append(curr.data)
    return result
```

원소의 삽입

- 1차

```py
def insertAfter(self, prev, newNode):
    newNode = prev.next
    if prev.next.next is None:
        self.tail = newNode
    prev.next = newNode
    prev.next.prev = n ewNode
    self.nodeCount += 1
    return True
```

- 2차

```py
def insertAfter(self, prev, newNode):
    next = prev.next
    next.prev = newNode
    newNode.next = next
    newNode.prev = prev
    prev.next = newNode
```

- 3차
  - 강의 코드와 같은 듯. 강의 코드는 `prev.next` 의 조정을 `next.prev` 조정 보다 먼저 함.

```py
def insertAfter(self, prev, newNode):
    next = prev.next
    newNode.next = next
    newNode.prev = prev
    next.prev = newNode
    prev.next = newNode
    self.nodeCount += 1
    return True
```

특정 원소 얻어내기

```py
def getAt(self, pos):
    if pos < 0 or pos > self.nodeCount:
        return None
    i = 0
    curr = self.head
    while i < pos:
        curr = curr.next
        i += 1
    return curr
```

원소의 삽입

```py
def insertAt(self, pos, newNode):
    if pos < 0 or pos > self.nodeCount + 1:
        return False

    prev = self.getAt(pos - 1)
    return self.insertAfter(prev, newNode)
```

- 원소 삽입 할 때 맨 뒤에 넣는 경우 조금 더 효율적인 방법?
  - `getAt()` 을 개선
  ```py
      def getAt(self, pos):
      if pos < 0 or pos > self.nodeCount:
          return None
      if pos > self.nodeCount // 2:
          i = 0
          curr = self.tail
          while i < self.nodeCount - pos + 1:
              curr = curr.prev
              i += 1
      else:
          i = 0
          curr = self.head
          while i < pos:
              curr = curr.next
              i += 1
      return curr
  ```

연습문제 - 양방향 연결 리스트 메서드 구현

insertBefore

```py
def inserBefore(self, next, newNode):
    prev = next.prev
    newNode.prev = prev
    newNode.next = next
    prev.next = newNode
    next.prev = newNode
    nodeCount += 1
```

popAfter

```py
def popAfter(self, prev):
    data = prev.next.data
    next = prev.next.next

    prev.next = next
    next.prev = prev

    self.nodeCount -= 1

    return data

```

popBefore

```py
def popBefore(selsf, next):
    data = next.prev.data
    prev = next.prev.prev

    prev.next = next
    next.prev = prev

    self.nodeCount -= 1

    return data
```

popAt

- using prev

```py
def popAt(self, pop):
    if pos < 0 or pos > self.nodeCount + 1:
        return False

    prev = self.getAt(pos - 1)
    return self.popAfter(prev)
```

- using next

```py
def popAt(self, pop):
    if pos < 0 or pos > self.nodeCount + 1:
        return False

    next = self.getAt(pos + 1)
    return self.popBefore(next)
```

concat

```py
def concat(self, L):
    last_node = self.tail.prev
    first_node = L.head.next
    last_node.next = first_node
    first_node.prev = last_node
    self.nodeCount += L.nodeCount
```

reverse - 제출 코드

- 아래 두개 다 통과
- 아래 코드는 `curr` 를 `self.tail` 로 잡고, `while` 문 안에서 `curr` 를 `curr.prev` 로 조정한 뒤에 `data` 에 담는데, 이게 좀 더 명확한 듯.

```py
    def reverse(self):
        data = []
        i = self.nodeCount
        curr = self.tail.prev
        while i > 0:
            data.append(curr.data)
            curr = curr.prev
            i -= 1
        return data
```

```py
    def reverse(self):
        data = []
        i = self.nodeCount
        curr = self.tail
        while i > 0:
            curr = curr.prev
            data.append(curr.data)
            i -= 1
        return data
```

concat - 제출 코드 - 통과

- 아래에서 `if L.tail:` 부분이 필요한지는 잘 몰르겠음
  없어도 통과 됨.
  지난 강의에서 추가했던데 그 이유를 찾아보거나 해야할 듯.

```py
    def concat(self, L):
        if self.nodeCount > 0 or L.nodeCount > 0:
            front_last = self.tail.prev
            back_first = L.head.next

            front_last.next = back_first
            back_first.prev = front_last

            if L.tail:
                self.tail = L.tail
            self.nodeCount += L.nodeCount
        else:
            if L.tail:
                self.tail = L.tail
```
