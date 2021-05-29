class ArrayQueue:

    def __init__(self):
        self.data = []

    def size(self):
        return len(self.data)

    def isEmpty(self):
        return self.size() == 0

    def enqueue(self, item):
        self.data.append(item)

    def dequeue(self):
        return self.data.pop(0)

    def peek(self):
        return self.data[0]


class Node:

    def __init__(self, item):
        self.data = item
        self.left = None
        self.right = None


class BinaryTree:

    def __init__(self, r):
        self.root = r

    def bft(self):
        traversal = []
        q = ArrayQueue()

        if self.root:
            q.enqueue(self.root)

            while not q.isEmpty():
                # now = Node(q.dequeue())
                # 처음에 위와 같이 q.dequeue() 한 값을 Node 에 담았었다.
                # 그렇게 제출했더니 실패!
                # 해당 이진 트리 자체가 위의 정의된 구조의 노드들로 이루어진 트리이기 때문에 그 자체로 Node 들 이었던 것.
                # 그러니 그냥 꺼내서 쓰면 된다.
                # 조금 다른 경우지만 이해하는데 도움 됨 [질문](https://programmers.co.kr/questions/15864)
                now = q.dequeue()
                traversal.append(now.data)

                if now.left:
                    q.enqueue(now.left)
                if now.right:
                    q.enqueue(now.right)

        return traversal


def solution(x):
    return 0
