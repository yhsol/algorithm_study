class MyCircularDeque:
    def __init__(self, k: int):
        self.head, self.tail = ListNode(None), ListNode(None)
        self.k, self.len = k, 0
        self.head.right, self.tail.left = self.tail, self.head

    # 내부에서만 사용한다는 의미로 PEP 8 명명 규칙 기준에 따라 밑줄(_) 하나로 시작하도록 메소드 명을 정함
    def _add(self, node: ListNode, new: ListNode):
        n = node.right
        node.right = new
        new.left, new.right = node, n
        n.left = new

    def _del(self, node: ListNode):
        n = node.right.right
        # node.right 를 node.right.right 값으로 땡겨옴
        # 기존 node.right 가 제외됨 -> 삭제
        node.right = n
        n.left = node

    def insertFront(self, value: int) -> bool:
        # 최대 길이면 추가 불가
        if self.len == self.k:
            return False
#       # 길이를 하나 늘림 -> 추가할거니까
        self.len += 1
        # 추가
        self._add(self.head, ListNode(value))
        # 추가 완료 -> 성공
        return True

    def insertLast(self, value: int) -> bool:
        if self.len == self.k:
            return False
        self.len += 1
        self._add(self.tail.left, ListNode(value))
        return True

    def deleteFront(self) -> bool:
        if self.len == 0:
            return False
        self.len -= 1
        self._del(self.head)
        return True

     def deleteLast(self) -> bool:
         if self.len == 0:
             return False
         self.len -= 1
         self._del(self.tail.left.left)
         return True

     def getFront(self) -> int:
         return self.head.right.val if self.len else -1

     def getRear(self) -> int:
         return self.tail.left.val if self.len else -1

     def isEmpty(self) -> bool:
         return self.len == 0

     def isFull(self) -> bool:
         return self.len == self.k

class PriorityQueue:
    def __init__(self, k: int):
        pass

    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        root = result = ListNode(None)
        heap = []

        for i in range(len(lists)):
            if lists[i]:
                heapq.heappush(heap, (lists[i].val, i, lists[i]))
        
        while heap:
            node = heapq.heappop(heap)
            idx = node[1]
            result.next = node[2]
        
            result = result.next
            if result.next:
                heapq.heappush(heap, (Result.next.val, idx, result.next))
        
        return root.next
