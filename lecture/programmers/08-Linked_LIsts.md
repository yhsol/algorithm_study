# Linked Lists

### 원소의 삽입

```
def insertAt(self, pos, newNode):
```

pos 가 가리키는 위치에 (1 <= pos <= nodeCount + 1)
newNode 를 삽입하고
성공/실패에 따라 True/False 를 리턴

- newNode 의 next 를 prev.next 를 가리키도록 함
- newNode 에 self.next 연결 (pos)
- nodeCount + 1

- 원소의 삽입 - 코드 구현

  1. prev node 찾기
  2. newNode 의 next 가 prev.next 를 가리키도록 한다.
  3. prev 의 next 는 newNode 에 연결
  4. node count + 1

  - 예외처리
    1. 삽입하려는 위치가 리스트 맨 앞일 때
       - prev 없음
       - Head 조정 필요
    2. 삽입하려는 위치가 리스트 맨 끝일 때
       - Tail 조정 필요
    3. 빈 리스트에 삽입 할 때
       - 위 두 조건에 대한 처리를 통해 처리 됨

- 예외처리 전

```py
def insertAt(self, pos, newNode):
    prev = self.getAt(pos - 1) # 1
    newNode.next = prev.next # 2
    prev.next = newNode # 3
    self.nodeCount += 1 # 4
```

- 예외처리 추가

```py
def insertAt(self, pos, newNode):
    # pos 가 올바른 위치의 값을 가지고 있는가를 판단 후 그렇지 않다면 False 를 return
    if pos < 1 or pos > self.nodeCount + 1:
        return False
    # prev 는 없고, head 는 newNode 의 next 로, 다시 slef.head 는 newNode 를 가리키도록 한다.
    if pos == 1:
        # newNode 의 next 는 원래 head 의 Node 를 가리키도록 함
        newNode.next = self.head
        # head 에는 newNode 를 설정
        self.head = newNode
    # pos 의 위치가 처음이 아니라면, 위 (원소의 삽입 - 코드 구현) 의 순서를 따름
    else:
        # 이때 pos 가 마지막 위치라면 getAt 을 할 필요 없이 prev 에 tail 을 넣어주면 된다.
        if pos == self.nodeCount + 1:
            prev = self.tail
        else:
            prev = self.getAt(pos - 1)
        newNode.next = prev.next
        prev.next = newNode
    # pos 의 위치가 맨 마지막이라면, tail 을 조정
    if pos == self.nodeCount + 1:
        self.tail = newNode
    # head 와 tail 을 조정하는 과정을 통해 빈 리스트에 삽입하는 경우에 대해서도 처리가 가능 함

    # False 가 되지 않은 경우 nodeCount 를 1 증가시키고, True 를 return
    self.nodeCount += 1
    return True
```

- 실습 - Linked Lists

```py
class Node:

    def __init__(self, item):
        self.data = item
        self.next= None

class LinkedList:

    def __init__(self):
        self.nodeCount = 0
        self.head = None
        self.tail = None

    def __repr__(self):
        if self.nodeCount == 0:
            return 'LinkedList: empty'

        s = ''
        curr = self.head
        while curr is not None:
            s += repr(curr.data)
            if curr.next is not None:
                s += ' -> '
            curr = curr.next
        return s

    def getAt(self, pos):
        if pos <= 0 or pos > self.nodeCount:
            return None

        i = 1
        curr = self.head
        while i < pos:
            curr = curr.next
            i += 1

        return curr

    def insertAt(self, pos, newNode):
        if pos < 1 or pos > self.nodeCount + 1:
            return False

        if pos == 1:
            newNode.next = self.head
            self.head = newNode
        else:
            if pos == self.nodeClunt + 1:
                prev = self.tail
            else:
                prev = self.getAt(pos - 1)
            newNode.next = prev.next
            prev.next = newNode

        if pos == self.nodeCount + 1:
            self.tail = newNode

        self.nodeCount + 1
        return True
```

- 연결 리스트 원소 삽입의 복잡도
  - 맨 앞에 삽입하는 경우: O(1)
  - 중간에 삽입하는 경우: O(n)
  - 맨 끝에 삽입하는 경우: O(1)

### 연결 리스트 연산 - 원소의 삭제

```
    def popAt(self, pos):
```

pos 가 가리키는 위치의 (1 <= pos <= nodeCount)
node 를 삭제하고
그 node 의 데이터를 리턴

```py
    def popAt(self, pos):
        curr = None
        if pos <= 1 or pos <= nodeCount:
            if pos == 1:
                self.head = None
                self.next = None
            prev = self.getAt(pos - 1)
            curr = prev.next
            if pos == self.nodeCount + 1:
                self.tail = None
                prev.next = None
            else:
                prev.next = curr.next
        self.nodeCount -= 1
        return curr.data
```

- 정답 코드

```py
    def popAt(self, pos):
        if pos < 1 or pos > self.nodeCount:
            raise IndexError

        curr = None
        # pos 가 1일 경우 curr 는 head 일 것이고,
        # 추가적으로 pos 가 1이면서 또한 마지막 값일 경우 tail 을 조정해줘야 함
        if pos == 1:
            curr = self.head
            self.head = curr.next
            if pos == self.nodeCount:
                self.tail = None

        else:
            # pos 가 마지막 노드를 가리키면 tail 을,
            # 그렇지 않을 경우에는 prev.next 를 조정해줘야 함
            if pos == self.nodeCount:
                curr = self.tail
                self.tail = self.getAt(pos - 1)
                self.tail.next = None
            else:
                prev = self.getAt(pos - 1)
                curr = prev.next
                prev.next = curr.next

        self.nodeCount -= 1
        return curr.data
```

```py
    def popAt(self, pos):
        if pos < 1 or pos > self.nodeCount:
            raise IndexError

        curr = None
        if self.nodeCount == 1:
            curr = self.head
            self.head = None
            self.tail = None

        else:
            if pos == 1:
                curr = self.head
                self.head = self.head.next
            if pos == self.nodeCount:
                curr = self.tail
                prev = self.getAt(pos - 1)
                prev.next = None
                self.tail = prev
            else:
                prev = self.getAt(pos - 1)
                curr = prev.next
                prev.next = curr.next

        self.nodeCount -= 1
        return curr.data
```

- 연결 리스트 원소 삭제의 복잡도
  - 맨 앞에서 삭제하는 경우: O(1)
  - 중간에서 삭제하는 경우: O(n)
  - 맨 끝에서 삭제하는 경우: O(n)

### 연결 리스트 연산 - 두 리스트 연결

```
    def concat(self, L):
```

연결 리스트 self 의 뒤에
또다른 연결 리스트인 L 을 이어 붙임

- 예
  - `L1.concat(L2)`
    - `L1` 의 `tail.next` 이 `L2` 의 `head` 를 가리켜야 하고, `self.tail` 은 `L2.tail` 가 되어야 한다.
    ```py
        def concat(self, L):
            self.tail.next = L.head
            if L.tail:
                self.tail = L.tail
            self.nodeCount += L.nodeCount
    ```
