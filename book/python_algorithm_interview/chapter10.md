# 10장 데크, 우선순위 큐

## 데크

데크(Deque) 는 더블 엔디드 큐 (Double-Ended Queue)의 줄임말로,
글자 그대로 양쪽 끝을 모두 추출할 수 있는, 큐를 일반화한 형태의 추상 자료형 (ADT) 이다.

이중 연결 리스트 (Doubly Linked List)로 구현하는 편이 가장 잘 어울림

```
>>> import collections
>>> d = collections.deque()
>>> type(d)
<class 'collections.deque'>
```

26. 원형 데크 디자인
    문제: 다음 연산을 제공하는 원형 데크를 디자인하라.
    풀이1: 이중 연결 리스트를 이용한 데크 구현

## 우선순위 큐

우선순위 큐는 큐 또는 스택과 같은 추상 자료형과 유사하지만 추가로 각 요소의 '우선순위'와 연관되어 있다.

27. k개 정렬 리스트 병합
    문제: k개의 정렬된 리스트를 1개의 정렬된 리스트로 병합하라
    풀이1: 우선순위 큐를 이용한 리스트 병합

    - 우선순위 큐를 사용하면 매우 쉽게 풀이할 수 있음
    - 파이썬에서는 대부분의 우선순위 큐 풀이에 거의 항상 heapq 모듈을 사용함

    ```py
    for list in lists:
        heapq.heappush(heap, (lst.val, lst))
    ```

    - 파이썬의 heapq 모듈은 최소 힙(Min Heap)을 지원하며, 따라서 lst.val이 작은 순서대로 pop() 할 수 있다.
    - 그런데 기본적으로는 중복값 저장이 안됨 -> 이 문제의 예제에서는 중복값이 있기때문에 heappush() 함수에서 에러를 발생하기 때문에 중복된 값을 구분할 수 있는 추가 인자가 필요함 -> 따라서 사용할 일은 없지만, 오로지 에러를 방지하기 위한 용도로 연결 리스트의 순서를 적절히 삽입

    ```py
    for i in range(len(lists)):
        ...
        heapq.heappush(heap, (lists[i].val, i, lists[i]))
    ```

    - 이제 heappop()으로 값을 추출하면 가장 작은 노드의 연결 리스트부터 차례대로 나오게 되며, 이 값을 결과가 될 노드 result에 하나씩 추가한다.
    - 아울러 k개의 연결 리스트가 모두 힙에 계속 들어 있어야 그중에서 가장 작은 노드가 항상 차례대로 나올 수 잇으므로, 추출한 연결 리스트의 그다음 노드는 다음과 같이 다시 힙에 추가한다.

    ```py
    while heap:
        node = heapq.heappop(heap)
        idx = node[1]
        result.next = node[2]

        result = result.next
        if result.next:
            heapq.heappush(heap, (result.next.val, idx, result.next))
    ```
