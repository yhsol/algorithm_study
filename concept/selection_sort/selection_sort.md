# 선택 정렬

- 문제: list 안에 있는 자료를 순서대로 배열
- 입력: 정렬할  list
- 출력: 순서대로 정렬된 list
- 풀이 흐름1
    - list 를 입력받는다.
    - 자료를 정렬해 담을 그릇 result 를 만든다.
    - 입력된 list 에 자료가 있는 동안 반복할 반복문을 작성한다.
    - 최솟값의 위치를 찾을 함수를 작성한다.
    - 위 함수를 통해 찾아낸 위치를 통해 입력된 list 에서 해당 위치의 자료를 pop 한다. (a.pop(min_idx))
    - 해당 값을 result 에 append 한다. (result.append(a.pop(min_idx)))
    - result 를 반환한다.

    - python

```python
def find_min_idx(a):
  n = len(a)
  min_idx = 0
  for i in range(0, n):
    if a[min_idx] > a[i]:
      min_idx = i
  return min_idx

def sel_sort(a):
  result = []
  while a:
    min_idx = find_min_idx(a)
    value = a.pop(min_idx)
    result.append(value)
  return result
```

- rust

```python

```