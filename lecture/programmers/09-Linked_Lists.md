# Linked Lists

### 연결 리스트가 힘을 발휘할 때

삽입과 삭제가 유연하다는 것이 가장 큰 장점
position 을 가지고 탐색을 해 가면서 삽입과 삭제를 하는 것은 그다지 유리하지 않음.

삽입과 삭제의 장점을 활용할 수 있는 메서드 만들기
`insertAfter(prev, newNode)`, `popAfter(prev)`
이때 다음 두가지 고려 필요

- 맨 앞에 삽입은?
- 맨 앞에서의 삭제는?

-> dummy node 를 추가하여 활용

```py
class LinkedList:
    def __init__(self):
        self.nodeCount = 0
        self.head = Node(None) # dummy node
        self.tail = None
        self.head.next = self.tail

    def traverse(self):
        result = []
        curr = self.head
        while curr.next:
            curr = curr.next
            result.append(curr.data)
        return result

    def getAt(self, pos):
        if pos < 0 or pos > self.nodeCount:
            return None
        i = 0
        curr = self.head
        while i < pos:
            curr = curr.next
            i += 1
        return curr

    def insertAfter(self, prev, newNode):
        newNode.next = prev.next
        if prev.next is None:
            self.tail = newNode
        prev.next = newNode
        self.nodeCount += 1
        return True

    def insertAt(self, pos, newNode):
        if pos < 1 or pos > self.nodeCount + 1:
            return False

        if pos != 1 and pos == self.nodeCount + 1:
            prev = self.tail
        else:
            prev = self.getAt(pos - 1)
        return self.insertAfter(prev, newNode)

    def popAfter(self, prev):
        if prev is self.tail:
            return None
        curr = prev.next
        if curr is self.tail:
            self.tail = prev
        prev.next = curr.next
        self.nodeCount -= 1
        return curr.data

    def popAt(self, pos):
        if pos < 1 or pos > self.nodeCount:
            raise IndexError

        if pos != 1 and pos == self.nodeCount + 1:
            prev = self.tail
        else:
            prev = self.getAt(pos - 1)
        return self.popAfter(prev)

    def popAfter(self, prev):
        curr = prev.next
        if curr is self.tail:
            self.tail = prev
            prev.next = None
        else:
            prev.next = curr.next
        self.nodeCount -= 1
        return curr.data


    def popAt(self, pos):
        if pos < 1 or pos > self.nodeCount:
            raise IndexError
        prev = self.getAt(pos-1)
        return self.popAfter(prev)

    def concat(self, newList):
        self.tail.next = newList.head.next
        if newList.tail:
            self.tail = newList.tail
        self.nodeCount += newList.codeCount
```
