# 선택 정렬

- 선택 정렬:  
   가장 작은 것을 가장 앞으로 보내며 완성

- 계산 복잡도: O(n2)  
   아래 풀이에서 반복문 안에서 비교하는 안쪽 반복문의 변수 값 j 를 확인해보면 등차수열의 구조를 갖는다.

- 문제: list 안에 있는 자료를 순서대로 배열
- 입력: 정렬할 list
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

```python
def selection_sort(a) {
  n = len(a)
  for i in range(0, n-1):
    min_idx = 1
    for j in range(i+1, n):
      if a[j] < a[min_idx]:
        min_idx = j
    a[i], a[min_idx] = a[min_idx], a[i]
}

```

- ts

```ts
function selection_sort(a: number[]) {
  let n = a.length;
  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;

    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[min_idx]) {
        min_idx = j;
      }
    }

    [a[i], a[min_idx]] = [a[min_idx], a[i]];
  }
}

let d = [2, 4, 5, 1, 3];
selection_sort(d);
```
