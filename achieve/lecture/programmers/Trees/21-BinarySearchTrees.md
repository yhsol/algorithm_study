# 이진 탐색 트리 (Binary Search Trees)

## 이진 탐색 트리에서 원소 삭제

1. 키 (key) 를 이용해서 노드를 찾는다.

   - 해당 키의 노드가 없으면, 삭제할 것도 없음
   - 찾은 노드의 부모 노드도 알고 있어야 함 (아래 2번 때문)

2. 찾은 노드를 제거하고도 이진 탐색 트리 성질을 만족하도록 트리의 구조를 정리한다.

## 인터페이스의 설계

- 입력: 키 (key)
- 출력:
  - 삭제한 경우 True
  - 해당 키의 노드가 없는 경우 False
  ```py
  class BinSearchTree:
      def remove(self, key):
          # self.lookup 으로 주어진 키에 해당하는 노드가 있는지 확인
          node, parent = self.lookup(key)
          if node:
              ... # 노드가 있으면 삭제 진행 후
              return True
          else:
              return False
  ```

## 이진 탐색 트리 구조의 유지

- 삭제되는 노드가

  1. 말단 (leaf) 노드인 경우

  - 그냥 그 노드를 없애면 됨
    - 부모 노드의 링크를 조정 (좌? 우?)
    - 부모가 삭제된 노드를 가리키고 있던 링크를 None 으로 처리
  - 삭제되는 노드가 root node 인 경우는 어떻게?
    - 트리 자체가 없어지는 식으로 구현
    - self.root = None

  2. 자식을 하나 가지고 있는 경우

  - 삭제되는 노드 자리에 그 자식을 대신 배치

    - 자식이 왼쪽? 오른쪽?
    - 부모 노드의 링크를 조정 (좌? 우?)

  - 자식을 어느쪽에 가지고 있는지 확인 후 해당 방향 자식을 올리고, 부모 노드의 링크도 방향에 맞춰서 조정

  - 삭제되는 노드가 root node 인 경우는 어떻게?
    - 대신 들어오는 자식이 새로 root 가 됨

  3. 자식을 둘 가지고 있는 경우

  - 삭제되는 노드보다 바로 다음 (큰) 키를 가지는 노드(Succesor)를 찾아 (작은 키로 해도 되는 데 강의에서는 큰 키고 통일)
    그 노드를 삭제되는 노드 자리에 대신 배치하고
    이 노드를 대신 삭제

  - 5 삭제

    - before

    ```
                5
        2               8
    1       4       6       9
                        7
    ```

    - after

    ```
                6
        2               8
    1       4       7       9
    ```

  - 8 삭제

    - before

    ```
                5
        2               8
    1       4       6       9
                        7
    ```

    - after

    ```
                5
        2               9
    1       4       6
                        7
    ```

- 우선 자식을 세어 보자

```py
class Node:
    def countChildren(self):
        count = 0
        if self.left:
            count += 1
        if self.right:
            count += 1
        return count
```

## 이진 탐색 트리가 별로 효율적이지 못한 경우

- 예

  ```py
  T = BinSearchTree()
  T.insert(1, 'John')
  T.insert(2, 'Mary')
  T.insert(3, 'Anne')
  T.insert(4, 'Peter')
  ```

- 이진 트리의 왼쪽 오른쪽 구성을 균형있게 해야 함. 위의 예는 insert 가 순차적으로 되기때문에 트리가 한쪽으로 치우치게 됨.
- 높이의 균형을 유지함으로써 O(logn) 의 탐색 복잡도 보장
  - 삽입, 삭제 연산이 보다 복잡
    - AVL\_트리,
    - 레드-블랙\_트리
