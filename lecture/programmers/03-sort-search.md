# sort, search

- sorted

  - 내장 함수
  - 정렬된 배열을 return

- sort

  - list 의 method
  - list 를 정렬
  - return 값은 없음

- reverse

  - sorted(listname, reverse=True)
  - listname.sort(reverse=True)

- 특정 조건을 기준으로 정렬

  - 문자열의 길이를 기준으로 정렬

  ```py
    L = ["abcd", "xyz", "spam"]
    sorted(L, key=lambda x: len(x))
  ```

  - list 안의 dict 에 대한 정렬

  ```py
    L = [{'name': 'John', 'score': 83},
        {'name': 'Paul', 'score': 92}]
    L.sort(key=lambda: x: x['name'])
    L.sort(key=lambda: x: x['score'], reverse=True)
  ```

- 선형 탐색 (Linear Search)

  - 앞에서부터 뒤로 하나 하나 탐색
  - 리스트의 길이에 비례하는 시간 소요 -> O(n)

  ```py
    def linear_search(L, x):
      i = 0
      while i < len(L) and L[i] != x:
        i += 1
      if i < len(L):
        return i
      else:
        return -1
  ```

- 이진 탐색 (Binary Search)

  - 탐색하려는 리스트가 이미 정렬되어 있는 경우에만 적용 가능
  - 크기 순으로 정렬되어 있다는 성질 이용!
  - 한 번 비교가 일어날 때마다 리스트 반씩 줄임 (divide & conquer) -> O(log n)

  ```py
    lower = 0
    upper = len(L) - 1
    idx = -1 # result
    while lower <= upper:
      middle = (lower + upper) // 2
      if L[middle] == targe:
        # todo
      elif L[middle] < target:
        lower = # todo
      else:
        upper = # todo
  ```

- 실습문제 - py

```py
def solution(L, x):
    answer = -1
    start = 0
    end = len(L) - 1

    while start <= end:
        middle = (start + end) // 2
        if L[middle] == x:
            return middle
        elif x > L[middle]:
            start = middle + 1
        else:
            end = middle - 1

    return answer
```
