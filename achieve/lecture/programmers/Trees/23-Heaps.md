# 힙 (Heaps)

## 최대 힙에서 원소의 삭제

(최대 힙, 최소 힙은 대소관계의 반대로 됨만 다르지 마찬가지 과정을 가짐)

- 최대 힙의 삭제에서는 어느 원소를 삭제하라는 것이 아닌, 최대 원소를 삭제함.

1. 루트 노드의 제거 - 이것이 원소들 중 최댓값
2. 트리 마지막 자리(배열로 보면 마지막 인덱스) 노드를 임시로 루트 노드의 자리에 배치. 마지막 자리는 삭제.
3. 자식 노드들과의 값 비교와 아래로, 아래로 이동

   - 최대 힙의 조건을 만족시켜야 함.
   - 트리의 마지막에서 꺼낸 값이 트리의 최댓값은 아닐 것임.
   - 그렇기 때문에 자식 노드와 비교하면 위치를 찾아갈 수 있도록 함.

   - 자식은 둘 있을 수도 있는데, 어느 쪽으로 이동?
     - 자식 둘이 있다면, 그 중 더 큰 키 값을 가지는 쪽으로 이동

- 복잡도

  - 원소의 개수가 n 인 최대 힙에서 최대 원소 삭제
    -> 자식 노드들과의 대소 비교 최대 회수: 2 X log2n
  - 최악 복잡도 O(logn)의 삭제 연산

- 삭제 연산의 구현 - remove() 메서드

  ```py
  class MaxHeap:
      def maxHeapify(self, i):
          left = ...
          right = ...
          smallest = i # 가장 작은 인덱스
          # 자신 (i), 왼쪽 자식 (left), 오른쪽 자시 (right) 중 최대를 찾음
          # -> 이것의 인덱스를 smallest 에 담음
          if smallest != i:
              # 현재 노드 (i) 와 최댓값 노드 (smallest) 의 값 바꾸기
              # 재귀적으로 maxHeapify 를 호출
              # i 가 i, left, right 중 최댓값일 때 종료
              # i 의 child 가 없는 경우에 대한 조건문도 필요
      def remove(self):
          if len(self.data) > 1: # 1번 인덱스부터 실제 노드가 있는 것
              self.data[1], self.data[-1] = self.data[-1], self.data[1]
              data = self.data.pop(-1)
              self.maxHeapify(1) # recursive 하게 구현
          else:
              data = None
          return data
  ```

- 최대 / 최소 힙의 응용

1. 우선 순위 큐 (priority queue)
   - Enqueue 할 때 "느슨한 정렬"을 이루고 있도록 함: O(logn)
   - Dequeue 할 때 최댓값을 순서대로 추출: O(logn)
   - 제 16 강에서의 양방향 연결 리스트 이용 구현과 효율성 비교
2. 힙 정렬 (heap sort)
   - 정렬되지 않은 원소들을 아무 순서로나 최대 힙에 삽입: O(logn)
   - 삽입이 끝나면, 힙이 비게 될 때까지 하나씩 삭제: O(logn)
   - 원소들이 삭제된 순서가 원소들의 정렬 순서
   - 정렬 알고리즘의 복잡도: O(nlogn)

- 힙 정렬 (heap sort) 의 코드 구현

  ```py
  def heapsort(unsorted):
      H = MaxHeap()
      for item in unsorted:
          H.insert(item)
      sorted = []

      # MaxHeap 에서 값을 하나씩 sorted 에 삽입
      d = H.remove()
      while d:
          sorted.append(d)
          d = H.remove()

      return sorted
  ```
