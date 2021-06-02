class Node:

    def __init__(self, key, data):
        self.key = key
        self.data = data
        self.left = None
        self.right = None

    def insert(self, key, data):
        if key < self.key:  # 왼쪽에 삽입
            if self.left:
                self.left.insert(key, data)
            else:
                self.left = Node(key, data)
        elif key > self.key:  # 오른쪽에 삽입
            if self.right:
                self.right.insert(key, data)
            else:
                self.right = Node(key, data)
        else:
            # 뭘 넣어야하지 중복됐다는 메시지? -> 그냥 에러를 만들기만 하면 안에 메시지는 상관없는듯@
            raise KeyError("It's duplicate!")

    def inorder(self):
        traversal = []
        if self.left:
            traversal += self.left.inorder()
        traversal.append(self)
        if self.right:
            traversal += self.right.inorder()
        return traversal


class BinSearchTree:

    def __init__(self):
        self.root = None

    def insert(self, key, data):
        if self.root:
            self.root.insert(key, data)
        else:
            self.root = Node(key, data)

    def inorder(self):
        if self.root:
            return self.root.inorder()
        else:
            return []


def solution(x):
    return 0
