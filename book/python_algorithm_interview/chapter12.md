# 그래프

수학에서, 좀 더 구체적으로 그래프 이론에서 그래프란 객체의 일부 쌍(pair)들이 '연관되어' 있는 객체 집합 구조를 말한다.

### 그래프 순회

그래프 순회란 그래프 탐색(Search)이라고도 불리우며 그래프의 각 정점을 방문하는 과정을 말한다.

- 그래프 순회(Graph Traversals)에는 크게 2가지 알고리즘

  - 깊이 우선 탐색(Depth-First-Search)
    - 코딩 테스트 시에도 대부분의 그래프 탐색은 DFS 로 구현
    - 주로 스택으로 구현하거나 재귀로 구현
    - 백트래킹을 통해 뛰어는 효용
  - 너비 우선 탐색(Breadth-Frist-Search)
    - 주로 큐로 구현
    - 그래프의 퇴단 경로를 구하는 문제 등에 사용

- 그래프 표현
  - 인접 행렬 Adjacency Matrix
  - 인접 리스트 Adjacency List
    - 출발 노드를 키로, 도착 노드를 값으로 표현할 수 있음
    - 도착 노드는 여러 개가 될 수 있으므로 리스트 형태가 됨.
    - 파이썬의 딕셔너리 자료형으로 다음과 같이 나타낼 수 있음.

```py
graph = {
    1: [2, 3, 4],
    2: [5],
    3: [5],
    4: [],
    5: [6, 7],
    6: [],
    7: [3],
}
```

#### DFS(깊이 우선 탐색)

- 재귀 구조로 구현

위키피디아에 제시된 수도코드

```
DFS(G, v)
    label v as discovered
    for all directed edges from v to w that are in G.adjacentEdges(v) do
        if vertex w is not labeled as discovered then
            recursibely call DFS(G, w)
```

파이썬으로 구현

```py
def recursive_dfs(v, discovered=[]):
    discovered.append(v)
    for w in graph[v]:
        if w not in discovered:
            discovered = recursive_dfs(w, discovered)
    return discovered
```

```js
function recursiveDfs(v, discoverd = []) {
  discoverd.push(v);
  for (const w of graph[v]) {
    if (!discoverd.includes(w)) {
      discovered = recursive_dfs(w, discovered);
    }
  }
  return discovered;
}
```

-> 탐색 결과

```
>>> f'recursive dfs: {recursive_dfs(1)}'
'recursive dfs: [1, 2, 5, 6, 7, 3, 4]'
```

- 막다른 곳에 도달할 때까지 연속으로 진행되는 탐색이 3번에 걸쳐 진행됨.

  - 1 -> 2 -> 5 -> 6
  - 7 -> 3
  - 4

- 스택을 이용한 반복 구조로 구현

수도 코드

```
DFS-iterative(G, v)
    let S be a stack
    S.push(v)
    while S is not empty do
        v = S.pop()
        if v is not labeled as discovered then
            label v as discovered
            for all edges from v to w in G.adjacentEdges(V) do
                S.push(w)
```

파이선 코드

```py
def iterative_dfs(start_v):
    discovered = []
    stack = [start_v]
    while stack:
        v = stack.pop()
        if v not in discovred:
            discovered.append(v)
            for w in graph[v]:
                stack.append(w)
    return discovred
```

대부분의 경우 재귀 구현은 반복으로,
반복 구현은 재귀로 서로 바꿔서 알고리즘을 구현할 수 잇으므로
자유롭게 바꿔가며 익숙해질 때까지 꾸준히 연습

-> 탐색 결과

```
>>> f'iterative dfs: {iterative_dfs(1)}'
'iterative dfs: [1, 4, 3, 5, 7, 6, 2]'
```

#### BFS(너비 우선 탐색)

최단 경로를 찾는 다익스트라 알고리즘 등에 매우 유용하게 쓰인다.

- 큐를 이용한 반복 구조로 구현
  스택을 이용하는 DFS와 달리, BFS를 반복 구조로 구현할 때는 큐를 이용한다.

수도 코드

```
BFS(G, start_v)
   let Q be a queue
   label start_v as discovered
   Q.enqueue(start_v)
   while Q is not empty do
       v := Q.dequeue()
       if v is the goal then
           return v
       for all edges from v to w in G.adjacentEdges(v) do
           if w is not labeled as discovered then
               label w as discovered
               w.parent := v
               Q.enqueue(w)
```

파이썬 코드

```py
def iterative_bfs(start_v):
   discovered = [start_v]
   queue = [start_v]
   while queue:
       v = queue.pop(0)
       for w in graph[v]:
           if w not in discovered:
               discovered.append(w)
               queue.qppend(w)
   return discovered
```

-> 탐색 결과

```
>>> f'iterative bfs: {iterative_bfs(1)}'
'iterative bfs: [1, 2, 3, 4, 5, 6, 7]'
```

- 재귀 구현 불가
  - BFS는 재귀로 동작하지 않는다. 큐를 이용하는 반복 구현만 가능

### 백트래킹

백트래킹(Backtracking)은 해결책에 대한 후보를 구축해 나아가다 가능성이 없다고 판단되는 즉시 후보를 포기(백트랙BackTrack)해 정답을 찾아가는 범용적인 알고리즘으로 제약 충족 문제(Constraint Satisfaction Problems)에 특히 유용하다.

DFS(깊이 우선 탐색)를 이야기하다 보면 항상 백트래킹이라는 단어가 함께 나온다. 백트래킹은 DFS보다 좀 더 광의의 의미를 지닌다. 백트래킹은 탐색을 하다가 더 갈 수 없으면 왔던 길을 되돌아가 다른 길을 찾는다는 데서 유래했다.
백트래킹은 DFS와 같은 방식으로 탐색하는 모든 방법을 뜻하며, DFS는 백트래킹의 골격을 이루는 알고리즘이다. 백트래킹은 주로 재귀로 구현하며, 알고리즘마다 DFS 변형이 조금씩 일어나지만 기본적으로 모두 DFS의 범주에 속한다.

### 제약 충족 문제

백트래킹은 제약 충족 문제(Constraint Satisfaction Problems)(이하 CSP)를 풀이하는 데 필수적인 알고리즘이다. 앞서 살펴본 가지치기를 통해 제약 충족 문제를 최적화 하기 때문이다.

제약 충족 문제란 수많은 제약 조건(Constraints)을 충족하는 상태(States)를 찾아내는 수학 문제를 일컫는다.

- 대표적인 문제
  - 스도쿠, 십자말 풀이, 8퀸 문제, 4색 문제 같은 퍼즐 문제, 배낭 문제, 문자열 파싱, 조합 최적화 문제 등

32. 섬의 개수
    문제: 1을 육지로, 0을 물로 가정한 2D 그리드 맵이 주어졌을때, 섬의 개수를 계산하라. (연결되어 있는 1의 덩어리 개수를 구하라.)
    풀이1: DFS로 그래프 탐색

---

## 중처 함수

함수 내에 위치한 또 다른 함수
바깥에 위치한 함수들과 달리 부모 함수의 변수를 자유롭게 읽을 수 있다는 장점이 있다.

예

```py
def outer_function(t: str):
    text: str = t

    def inner_function():
        print(text)

    inner_function()

outer_funcion('Hello!')

#=> Hello!
```

- 연산자 조작
  중첩 함수에서 부모 함수에서 선언한 변수를 연산자로 조작하는 경우

```py
def outer_function(a: List[int]):
    b: List[int] = a
    print(id(b), b)

    def inner_function1():
        b.append(4)
        print(id(b), b)

    def inner_function2():
        print(id(b), b)

    inner_function1()
    inner_function2()

outer_function([1,2,3])
```

- 재할당
  재할당으로 참조 I가 변경되는 경우

```py
def outer_function(t: str):
    text: str = t
    print(id(text), text)

    def inner_function1():
        text = 'World!'
        print(id(text), text)

    def inner_function2():
        print(id(text), text)

    inner_function1()
    inner_function2()

outer_function('Hello!')
```

---

33. 전화 번호 문자 조합
    문제: 2에서 9까지 숫자가 주어졌을 때 전화 번호로 조합 가능한 모든 문자를 출력하라.
    풀이1: 모든 조합 탐색

34. 순열
    문제: 서로 다른 정수를 입력받아 가능한 모든 순열을 리턴하라.
    풀이1: DFS를 활용한 순열 생성

35. 조합
    문제: 전체 수 n을 입력받아 k개의 조합(Combination)을 리턴하라.
    풀이1: DFS로 k개 조합 생성
    풀이2: itertools 모듈 사용

36. 조합의 합
    문제: 숫자 집합 candidates를 조합하여 합이 target이 되는 원소를 나열하라. 각 원소는 중복으로 나열 가능하다.
