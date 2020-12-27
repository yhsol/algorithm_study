# insertion sort

- O(n^2)
- 각 숫자를 적잘한 위치에 삽입하는 방법으로 문제를 해결 -> '필요할 때만' 위치를 바꿈
- process

  - 자기보다 앞 자리들은 정렬이 된 상태
  - 그러면 자기보다 앞 자리를 탐색 하면서 자기보다 큰 수의 바로 전 자리에 들어가면 될 듯.

  - 아래와 같이 짜면 IndexError 발생
    - IndexError: list index out of range

  ```python
        def insertion_sort(arr):
            n = len(arr)
            for i in range(n):
                j = i
                while (arr[j] > arr[j+1]):
                    arr[j], arr[j+1] = arr[j+1], arr[j]
                    j -= 1
  ```

  - 다음과 같이 수정

  ```python
        def insertion_sort(a):
            n = len(a)
            for i in range(n):
                j = i
                while j > 0 and a[j - 1] > a[j]:
                    a[j - 1], a[j] = a[j], a[j - 1]
                    j -= 1
  ```

  - insertion sort 도 계속 반복을 하지만 자기보다 큰 수가 나오면 '멈추면 된다' 그래서 효율이 높음. 멈출 포인트를 알고 있기 때문이다.
