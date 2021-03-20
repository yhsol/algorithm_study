# 04. Recursive

- 재귀함수 (recursive functions)

  - 하나의 함수에서 **자신을 다시 호출**하여 작업을 수행하는 것
  - 생각보다 많은 종류의 문제가 재귀적으로 (revursively) 해결 가능

  - 예

    - 자연수의 합 구하기: 1부터 n까지 모든 자연수의 합을 구하시오

    ```py
    def sum(n):
        return n + sum(n-1)
    ```

    - 종결조건이 없음
    - 종결조건 추가

    ```py
    def sum(n):
        if <= 1:
            return n
        else:
            return n + sum(n-1)
    ```

  - 알고리즘의 종결조건

    - 재귀에서는 특히 중요!

  - 재귀 알고리즘의 효율

    - Recursive version vs Iterative version
    - 위의 자연수의 합 문제에 대해 둘다 효율은 O(n)
    - 그렇지만 알고리즘의 효율을 따졌을 때 Recursive version 의 경우 함수를 호출하고 리턴하는 과정을 거쳐야하기 때문에 Iterative version 이 효율적.
    - 재귀알고리즘이 사람이 생각하는 방식을 표현하기에 유리한 면도 있지만 효율적인 측면에서 본다면 조심해야하는 부분이 분명히 있음.

    - Recursive version

    ```py
    def sum(n):
        if n <= 1:
            return n
        else:
            return n + sum(n-1)
    ```

    - Iterative version

    ```py
    def sum(n):
        s = 0
        while n >= 0:
            s += n
            n -= 1
        return s
    ```

- 연습문제

  - Fibonacci

    - Recursive

    ```py
    def solution(x):
        if x < 2:
            return x
        else:
            return solution(x - 1) + solution(x - 2)
    ```

    - Iterative

    ```py
        def solution(x):
            answer = 0
            fibo = []
            for i in range(x):
                if i >= 2:
                    fibo.append(fibo[-1] + fibo[-2])
                else:
                    fibo.append(i)
            if x == 1:
                return 1
            elif len(fibo) <= 2:
                return sum(fibo)
            else:
                return fibo[-1] + fibo[-2]

    ```
