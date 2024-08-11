# 이진 트리 (Binary Trees)

## 이진 트리의 추상적 자료구조

- 연산의 정의
  - size() - 현재 트리에 포함되어 있는 노드의 수를 구함
  - depth() - 현재 트리의 깊이 (또는 높이; height) 를 구함
  - 순회 (traversal)

## 이진 트리의 구현

### 노드 (Node)

    - Node
        - Data
        - Left Child
        - Right Child

    ```py
    class Node:
        def __init__(self, item):
            self.data = item
            self.left = None
            self.right = None
    ```

### 트리 (Tree)

    - root 설정 필요

    ```py
    class BinaryTree:
        def __init__(self, r):
            self.root = r
    ```

### size()

    - 재귀적인 방법으로 쉽게 구할 수 있음!
    - 전체 이진 트리의 size() = left subtree 의 size() + right subtree 의 size() + 1 (자기 자신)
    - Node 자체에 size 메서드 필요
        - 각각의 노드를 루트로 하는 서브트리의 사이즈를 구할 수 있어야 하기 때문에 여기에는 바이너리 트리 자체의 메서드만 있으면 될게 아니라 노드의 입장에서 봤을 때 자기 자신이 루트인 서브트리의 size 를 구하는 멤버 메서드를 제공

        - Node 에서의 size

            ```py
            class Node:

                def size(self):
                    l = self.left.size() if self.left else 0
                    r = self.right.size() if self.right else 0
                    return l + r + 1
            ```
        - Tree 에서의 size

            ```py
            class BinaryTree:

                def size(self):
                    # self 의 root 가 있으면 root 의 사이즈가 전체 트리의 사이즈가 됨
                    if self.root:
                        return self.root.size()
                    # root 가 없다는 것은 빈 트리라는 것
                    else:
                        return 0
            ```

### depth()

    - 재귀적인 방법으로 쉽게 구할 수 있음!
    - 전체 이진 트리의 depth() = left subtree 의 depth() 와 right subtree 의 depth() 중 더 큰 것 + 1

        - Node 에서의 depth

            ```py
            class Node:
                def depth(self):
                    ...
            ```

        - Tree 에서의 depth

            ```py
            class BinaryTree:
                def depth(self):
                    if ...
            ```

### 이진 트리의 순회 (Traversal)

    - 깊이 우선 순회 (depth first traversal)
        - 중위 순회 (in-order traversal)
            - 순회의 순서:
                1. Left subtree
                2. 자기 자신
                3. Right subtree

                - Left subtree 를 순회 하고,
                    root 방문,
                    Right subtree 있으면 Right 방문, Right 없으면 parent 로 이동
                - 구현

                    - Node 에서의 메서드

                        ```py
                        class Node:

                            def inorder(self):
                                traversal = []
                                # Left subtree 순회
                                if self.left:
                                    traversal += self.left.inorder()
                                # 자기 자신
                                traversal.append(self.data)
                                # Right subtree 순회
                                if self.right:
                                    traversal += self.right.inorder()
                                # 결과인 traversal 리스트 리턴
                                return traversal
                        ```

                    - Tree 에서의 메서드

                        ```py
                        class BinaryTree:

                            def inorder(self):
                                if self.root:
                                    return self.root.inorder()
                                else:
                                    return []
                        ```

        - 전위 순회 (pre-order traversal)
            - 순회의 순서
                1. 자기 자신
                2. Left subtree
                3. Right subtree

        - 후위 순회 (post-order traversal)
            - 순회의 순서
                1. Left subtree
                2. Right subtree
                3. 자기 자신

    - 넓이 우선 순회 (breadth first traversal)
