# 재귀 알고리즘 (recursive algorithms) - 응용

## recursive functions

하나의 함수에서 자신을 다시 호출하여 작업을 수행하는 것

- 예

  - n 개의 서로 다른 원소에서 m 개를 택하는 경우의 수

  ```py
  from math import factorial as f

  def combi(n, m):
      return f(n) / (f(m) * f(n - m))
  ```

- recursive

  ```py
  def combi(n, m):
    if n == m:
        return 1
    elif m == 0:
        return 1
    else:
        return combi(n-1, m) + combi(n-1, m-1)
  ```

  - 효율성 측면

    - `return` 안에서 함수가 두번씩 호출되고 있고, 그 안에서 다시 함수가 호출 될 수 있으므로 재귀보다는 loop 을 이용해서 반복해서 푸는 것이 효율적일 것.

  - 효율이 떨어지지만 사용하는 이유

    - 사람이 생각하는 방식, 재귀적으로 생각하는 방식을 코드로 옮길 수 있기 때문에 쓸모있는 경우도 많다.
    - 예

      - 하노이의 탑
      - 트리구조의 문제
      - fibonacci

      ```py
      import time

      def rec(n):
        if n <= 1:
            return n
        return fibo(n-1) + fibo(n-2)

      def iter(n):
        if n <= 1:
            return n
        else:
            i = 2
            t0 = 0
            t1 = 1
            while i <= n:
                t0, t1 = t1, t0 + t1
            return t1

      while True:
        nbr = int(input("Enter a number: "))
        if nbr == -1:
            break

        ts = time.time()
        fibo = iter(nbr)
        ts = time.time() - ts
        print("Iterative version: %d (%.3f)" % (fibo, ts))
        ts = time.time()
        fibo = rec(nbr)
        ts = time.time() - ts
        print("Recursive version: %d (%.df)" % (fibo, ts))
      ```

- recursive binary search

```py
def binsearch(L, x, lower, upper):
    if lower >= upper:
        return -1
    mid = (lower + upper) // 2
    if x == L[mid]:
        return mid
    elif x < L[mid]:
        return _ # binsearch(L, x, lower, mid - 1)
    else:
        return _ # binsearch(L, x, mid + 1, upper)
```

- 정답

```py
def solution(L, x, l, u):
    if l > u:
        return -1
    mid = (l + u) // 2
    if x == L[mid]:
        return mid
    elif x < L[mid]:
        return solution(L, x, l, mid - 1)
    else:
        return solution(L, x, mid + 1, u)
```
