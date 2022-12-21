# 정렬

정렬 알고리즘은 목록의 요소를 특정 순서대로 넣는 알고리즘이다. 대게 숫자식 순서(Numerical Order)와 사전식 순서(Lexicographical Order)로 정렬한다.

## 버블 정렬

```
Bubblesort(A)
    for i from 1 to A.length
        for j from 0 to A.length - 1
            if A[j] > A[j + 1]
                swap a[j] with a[j + 1]
```

```py
def bubblesort(A):
    for i in range(1, len(A)):
        for j in range(0, len(A) - 1):
            if A[j] > A[j + 1]:
                A[j], A[j + 1] = A[J + 1], A[j]
```

리스트 17-1 버블 정렬 수도코드

## 병합 정렬

존 폰 노이만 John von Neumann

## 퀵 정렬

리스트 17-2 퀵 정렬 수도코드

```
Qucksort(A, lo, hi)
    if lo < hi then
        pivot := partition(A, lo, hi)
        Quicksort(A, lo, pivot - 1)
        Quicksort(A, pivot + 1, hi)
```

```py
def quicksort(A, lo, hi):

    if lo < hi:
        pivot = partition(lo, hi)
        quicksort(A, lo, pivot - 1)
        quicksort(A, pivot + 1, hi)
```

리스트 17-3 퀵 정렬 로쿠토 파티션 함수 수도코드

```
partition(A, lo, hi)
    pivot := A[hi]
    i := lo
    for j := lo to hi do
        if A[j] < pivot then
            swap A[i] with A[j]
            i := i + 1
    swap A[i] with A[hi]
    return i
```
