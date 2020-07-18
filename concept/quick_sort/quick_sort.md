# 퀵 정렬

- 퀵 정렬:  
   리스트를 기준값을 바탕으로 분할하여 정렬

- 계산 복잡도: O(n \* log n)

  - 상수에 가까운 효율
  - 하지만 이미 정렬이 되어 있는 경우 O(n^2) 가 되는데,
    정렬이 되어 있다면 분할 할 곳을 찾을 수 없어 분할 정렬의 장점을 쓸 수 없다.

- 문제: list 안에 있는 자료를 순서대로 배열
- 입력: 정렬할 list
- 출력: 순서대로 정렬된 list

- 풀이 흐름:

  - 기준점을 바탕으로 분할하고, 분할 된 리스트를 다시 분할 정렬하는 구조.
  - 재귀를 사용하게 된다.
  - 그러므로 종료조건을 작성한다.
  - 기준값, 오른쪽으로 탐색해 갈 변수(start), 왼쪽으로 탐색해 갈 변수(end)를 정의한다.
  - start 와 end 가 엇갈리기 전까지 반복하는 반복문을 만든다.
    - start 탐색에서 찾은 기준값보다 큰 값과, end 탐색에서 찾은 기준값보다 작은 값의 위치를 바꾼다.
  - start 와 end 가 엇갈릴 경우, 해당 값(엇갈리는 위치)과 기준값의 위치를 바꾼다.
  - start 와 end 를 바탕으로 하는 재귀 함수 두개를 호출한다.

- 사용 기능:

* python

```python
def insertion_sort(a):
    for i in range(0, len(a)):
        j = i
        while j > 0 and a[j - 1] > a[j]:
            a[j - 1], a[j] = a[j], a[j - 1]
            j -= 1


def insertion_sort_2(a):
    for i in range(1, len(a)):
        key = a[i]
        j = i - 1
        while j >= 0 and a[j] > key:
            a[j+1] = a[j]
            j -= 1
            a[j+1] = key


d = [2, 4, 5, 1, 3]
insertion_sort_2(d)
print(d)


```

- ts

```ts
function insertion_sort(a: number[]) {
  for (let i = 0; i < a.length; i++) {
    let j = i;
    while (a[j - 1] > a[j]) {
      [a[j - 1], a[j]] = [a[j], a[j - 1]];
      j--;
    }
  }
}

function insertion_sort_2(a: number[]) {
  for (let i = 0; i < a.length; i++) {
    let key = a[i];
    let j = i;
    while (j >= 0 && a[j - 1] > key) {
      a[j] = a[j - 1];
      j--;
      a[j] = key;
    }
  }
}

let d = [2, 4, 5, 1, 3];
insertion_sort_2(d);
console.log(d);
```

- rust

```rust
pub fn run() {
    let mut d = [2, 4, 5, 1, 3];
    insertion_sort_2(&mut d);
    println!("{:?}", d);
}

fn insertion_sort(a: &mut [i64]) {
    for i in 0..a.len() {
        let mut j = i;
        while j > 0 && a[j - 1] > a[j] {
            println!("{}", j);
            a.swap(j - 1, j);
            j -= 1;
        }
    }
}

fn insertion_sort_2(a: &mut [i64]) {
    for i in 1..a.len() {
        let key = a[i];
        let mut j = i;
        // j-1 값이 0 보다는 커야 하므로 j > 0 이 성립한다.
        // 해당 조건을 걸지 않으면 무한 루프에 빠진다.
        // 아직 확실히 이해는 안됨.
        while j > 0 && a[j - 1] > key {
            println!("{}", j);
            a[j] = a[j - 1];
            j -= 1;
            a[j] = key
        }
    }
}


```

- 참고:

  - https://medium.com/@spyr1014/sorting-in-rust-selection-insertion-and-counting-sort-2c4d3575e364
  - 아주 직관적이지는 않은데 근데 또 보다보면 오히려 이해가 쉽기도 하다.

  ```
    fn insertion_sort<T: Ord>(list: &mut [T]) {
    for i in 1..list.len() {
      for j in (1..i + 1).rev() {
        if list[j - 1] <= list[j] { break; }
        list.swap(j - 1, j)
      }
    }
    }
  ```
