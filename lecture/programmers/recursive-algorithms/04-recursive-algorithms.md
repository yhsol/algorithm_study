# 재귀 알고리즘 Recursive Algorithms

- 재귀함수 (recursive functions) 란?
  - 하나의 함수에서 자신을 다시 호출하여 작업을 수행하는 것
  - 생각보다 많은 종류의 문제가 재귀적으로 (recursively) 해결 가능
  - 예:
    - 이진 트리 (binary trees)
    - 자연수의 합 구하기
      - 문제: 1부터 n까지 모든 자연수의 합을 구하시오.
      - 코드:
        ```py
            def sum_one_to_n(n: int) -> int:
                if n <= 1:
                    return n
                else:
                    return n + sum_one_to_n(n-1)
        ```
  - 재귀 호출의 종결 조건
    - 코드
      ```py
      def sum(n):
          if n...:
              ...
              # 매우 중요!
          else:
              ....
              sum(...)
      ```
  - 재귀 알고리즘의 효율
    - 재귀 vs 반복
      - 재귀 - O(n)
        ```py
        def sum(n):
            if n <= 1:
                return n
            else:
                return n + sum(n - 1)
        ```
      - 반복 - O(n)
        ```py
        def sum(n):
            s = 0
            while n >= 0:
                s += n
                n -= 1
            return s
        ```
    - 재귀 알고리즘은 카운터 파트의 반복 알고리즘을 가지고 있음.
    - 둘 다 O(n) 이지만 재귀호출의 경우 함수를 호출하고, 리턴하는데 드는 부가적인 과정이 필요하기 때문에 효율성은 떨어지게 됨.
    - 재귀알고리즘은 사람이 생각하는 방식을 표현하기에 유리한 면도 있지만, 효울적인 측면에서 본다면 조심을 해야 될 부분이 분명히 있을 것.
    - 예를들어 위 `sum` 은 다음과 같이 구현할 수도 있음
      ```py
      def sum(n):
          return n * (n + 1) // 2
      ```
