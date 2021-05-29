# 이진 트리의 넓이 우선 순회 (BFS; Breadth First Traversal)

### 넓이 우선 순회 (Breadth First Traversal)

- 원칙

  - 수준 (level) 이 낮은 노드를 우선으로 방문
  - 같은 수준의 노드들 사이에는
    - 부모 노드의 방문 순서에 따라 방문
    - 왼쪽 자식 노드를 오른쪽 자식보다 먼저 방문

- 재귀적 (recursive) 방법이 적합한가?
  - 별로 적합하지 않음

```
                A               // Level 0
        B               C       // Level 1
    D       E       F       G   // Level 2
H                       J       // Level 3

A => B -> C => D -> E -> F -> G => H -> J
```

- 한 노드를 방문했을 때

  - 나중에 방문할 노드들을 순서대로 기록해 두어야 함
  - 큐 (Queue) 를 이용하면 어떨까!

  - 큐 이용

    ```
                    A               // Level 0
            B               C       // Level 1
        D       E       F       G   // Level 2
    H                       J       // Level 3
    ```

    - Queue = [A] // 루트 노드인 A 를 큐에 넣음
    - Queue 에서 꺼내서 처리 -> A, Queue = [] // A 를 방문할 때 자식을 큐에 넣음 -> Queue = [B, C] -> 노드 A 에 대한 처리 완료
    - Queue 에서 하나 꺼냄 -> B, Queue = [C] // B 방문, B 의 자식을 큐에 넣음 -> Queue = [C, D, E] -> 노드 B 에 대한 처리 완료
    - C 처리 -> C 의 자식 큐에 삽입 -> Queue = [D, E, F, G] // 노드 C 에 대한 처리 완료
    - D 처리 -> D 의 자식 H 를 큐에 넣음 -> Queue = [E, F, G, H] -> 노드 D 에 대한 처리 완료
    - E 처리 -> 노드 E 에 대한 처리 완료
    - F 처리 -> F 의 자식 J 를 큐에 넣음 -> 노드 F 에 대한 처리 완료
    - G 처리 -> 노드 G 에 대한 처리 완료
    - H 처리 -> 노드 H 에 대한 처리 완료
    - J 처리 -> 노드 J 에 대한 처리 완료
    - 큐가 비어 있음 -> 모든 노드들에 대한 넓이 우선 순회를 완료

  - 구현

    1. (초기화) traversal <- 빈 리스트, q <- 빈 큐
    2. 빈 트리가 아니면, root node 를 큐에 추가 (enqueue)
    3. q 가 비어 있지 않은 동안
       3.1. q 에서 원소를 추출 (dequeue) 해서 node 라는 원소에 담음
       3.2. node 를 방문 -> traversal 이라는 리스트에 node 의 data 를 append
       3.3. node의 왼쪽, 오른쪽 자식 (있으면) 둘을 큐에 추가
    4. q 가 빈 큐가 되면 모든 노드 방문 완료

    ```py
    class BinaryTree:

        def bft(self):

    ```
