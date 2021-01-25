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
