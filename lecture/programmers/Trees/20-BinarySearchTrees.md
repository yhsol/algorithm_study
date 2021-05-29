# 이진 탐색 트리

모든 노드에 대해서, - 왼쪽 서브트리에 있는 데이터는 모두 현재 노드의 값보다 작고 - 오른쪽 서브트리에 있는 데이터는 모두 현재 노드의 값보다 큰
성질을 만족하는
이진 트리

(중복되는 데이터 원소는 없는 것으로 가정)

예

```
                5
        2               8
    1       4       6       9
                        7

// 예: 6 을 찾아라!
```

이진 탐색과 비교

### (정렬된) 배열을 이용한 이진 탐색과 비교

- 이진 탐색 트리의 장점: 데이터 원소의 추가, 삭제가 용이
- 이진 탐색 트리의 단점: 공간 소요가 큼 - 서브트리등의 정보들을 기록해두어야 함

### 이진 탐색 트리의 추상적 자료구조

- 데이터 표현 - 각 노드는 (key, value) 의 쌍으로

```
                5
        2               8
    1       4       6       9
                        7

key: value
5: John
2: David
1: Patrick
4: Sue
8: Mary
6: Anne
9: Clara
7: Peter
```

키를 이용해서 검색 가능
보다 복잡한 데이터 레코드로 확장 가능

- 연산의 정의

  - insert(key, dat) - 트리에 주어진 데이터 원소를 추가
  - remove(key) - 특정 원소를 트리로부터 삭제
  - lookup(key) - 특정 원소를 검색
  - inorder() - 키의 순서대로 데이터 원소를 나열
  - min(), max() - 최소 키, 최대 키를 가지는 원소를 각각 탐색

- 이진 탐색 트리에 원소 삽입

  - 초기화

  ```py
  class Node:
      def __init__(self, key, data):
          self.key = key
          self.data = data
          self.left = None
          self.right = None

  class BinSearchTree:
      def __init__(self):
          self.root = None
  ```

  - 코드 구현 - in-order traversal

  ```py
  class Node:
      def inorder(self):
          traversal = []
          if self.left:
              traversal += self.left.inorder()
          traversal.append(self)
          if self.right:
              traversal += self.right.inorder()
          return traversal

  class BinSearchTree:
      def inorder(self):
          if self.root:
              return self.root.inorder()
          else:
              return []
  ```

  - 코드 구현 - min()

  ```py
  class Node:
      def min(self):
          if self.left:
              return self.left.min()
          else:
              return self

  class BinSearchTree:
      def min(self):
          if self.root:
              return self.root.min()
          else:
              return None

  ```

  - 코드 구현 - max()

  ```py
  class Node:
      def max(self):
          if self.right:
              return self.right.max()
          else:
              return self

  class BinSearchTree:
      def max(self):
          if self.root:
              return self.root.max()
          else:
              return None
  ```

  - 코드 구현 - lookup()

    - 입력 인자:
      - 찾으려는 대상 키
    - 리턴:
      - 찾은 도드와, 그것의 **부모 노드**
        (각각, 없으면 None 으로)

    ```py
    class Node:
        def lookup(self, key, parent=None):
            if key < self.key:
                 if self.left:
                     return self.left.lookup(key, self)
                 else:
                     return None, None
            elif key > self.key:
                if self.right:
                    return self.right.lookup(key, self)
                else:
                    return None, None
            else:
                return self, parent

    class BinSearchTree:
        def lookup(self, key):
            if self.root:
                return self.root.loopup(key)
            else:
                return None, None
    ```

    - 코드 구현 - insert()

      - 입력 인자:
        - 키, 데이터 원소
      - 리턴:
        - 없음

      ```py
      class Node:
          def insert(self, key, data):
              if key < self.key:
                  pass
              elif key > self.key:
                  pass
              else:
                  raise KeyError('...')

      class BinSearchTree:
          def insert(self, key, data):
              if self.root:
                  self.root.insert(key, data)
              else:
                  self.root = Node(key, data)
      ```
