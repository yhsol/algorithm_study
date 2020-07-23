# 병합 정렬

- 병합 정렬:  
   리스트를 반씩나누며 정렬하고 합하는 방법  
   divide and conquer

  - 리스트를 가장 작은 단위까지 반씩 나눈다.
  - 나눠진 조각들을 정렬
  - 정렬된 조각을 다시 2의 배수의 크기만큼씩 다시 정렬하며 합친다.

  - 리스트를 계속해서 반으로 나누고, 합치기 때문에 재귀의 구조를 사용한다.

  - 나누고, 정렬하여 합칠 때 하나의 배열에 순서대로 삽입한다.
  - 이때 각 과정에서 배열을 공유할 수 있도록 전역변수로 선언한다.

* 계산 복잡도: O(n log n)

  - 나눠진 조각들을 정렬할 때는 각 조각들이 정렬되어있다는 전제를 할 수 있으므로 N 으로 계산.
  - 정렬할 크기가 증가하는 폭은 log N.
  - 따라서 계산 복잡도는 O(n log n).
  - O(n log n) 을 보장함.

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

- 보다보니 알 것 같기도 하기는 한데 어렵다. 일단 재귀라는 개념은 늘 쓸때마다 아리송한 기분이 든다. 그래서 쉽게 재귀라는 카드를 쓰지 못하는데  
  이에대한 개념을 한번 정리해야 할 필요가 있을 것 같기도 하다.

- 사용 기능:

* python

```python
def quick_sort_py(a, left, right):
    if (left >= right):
        return

    key = left
    i = left + 1
    j = right

    while (i <= j):
        while (i <= right and a[i] < a[key]):
            i += 1
        while (j > left and a[j] >= a[key]):
            j -= 1
        if (i > j):
            a[j], a[key] = a[key], a[j]
        else:
            a[i], a[j] = a[j], a[i]

    quick_sort_py(a, left, j - 1)
    quick_sort_py(a, j + 1, right)


d = [2, 9, 6, 4, 5, 7, 10, 1, 3, 8]
quick_sort_py(d, 0, len(d) - 1)
print(d)


```

- ts

```ts
const sorted: number[] = [];

const merge = function (a: number[], m: number, middle: number, n: number) {
  let i = m;
  let j = middle + 1;
  let k = m;

  // 각 조각의 처음부터 중간까지, 중간에서 끝까지의 범위를 탐색
  // 작은 순서대로 배열에 삽입
  // 인덱스 i 를 갖는 조각과 j 를 갖는 조각을 비교
  // i 를 갖는쪽이 작다면 배열에 i 를 인덱스로 갖는 값을 삽입
  // 그리고 인덱스 i 는 그 다음값을 나타내기 위해 +1
  // 반대의 경우 j 에 마찬가지로 수행
  // 수행이 끝나면 k 위치 자리 역시 +1

  // 범위내에서 작업이 끝난뒤에 남아있는 원소들을 배열에 삽입
  // i 는 middle 까지 남아있는 값 삽입
  // j 는 n 까지 남아있는 값 삽입

  // 정렬된 배열을 실제 배열에 반영
  while (i <= middle && j <= n) {
    if (a[i] <= a[j]) {
      sorted[k] = a[i];
      i++;
    } else {
      sorted[k] = a[j];
      j++;
    }
    k++;
  }

  // i 가 middle 보다 크다는 것은 i 의 정렬이 끝났음을 의미.
  if (i > middle) {
    for (let t = j; t <= n; t++) {
      sorted[k] = a[t];
      k++;
    }
  } else {
    for (let t = i; t <= middle; t++) {
      sorted[k] = a[t];
      k++;
    }
  }

  for (let t = m; t <= n; t++) {
    a[t] = sorted[t];
  }
};

const merge_sort = function (a: number[], m: number, n: number) {
  // 배열의 크기가 1 이상일 때
  if (m < n) {
    // 반으로 나누고,
    let middle = Math.floor((m + n) / 2);
    merge_sort(a, m, middle);
    merge_sort(a, middle + 1, n);
    // 합친다.
    merge(a, m, middle, n);
  }
};

let d = [2, 4, 5, 1, 3, 6, 7, 8];
merge_sort(d, 0, d.length - 1);
console.log(d);
for (let i = 0; i < d.length; i++) {
  console.log(d[i]);
}
```

- ts 다른 풀이

```ts
const merge = function (left: number[], right: number[]) {
  let result: number[] = [];
  while (left.length && right.length) {
    // 각 조각의 맨 앞 값을 비교해 작은 값을 배열에 삽입
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  // 한쪽 조각이 다 정렬된 뒤에 남아있는 다른 조각의 값들을 배열에 삽입
  // 각 조각은 각각 정렬이 완료된 상태이므로 그대로 담는다.
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
};

const merge_sort = function (a: number[]): any {
  if (a.length < 2) return a;
  let middle = Math.floor(a.length / 2);
  let left = a.slice(0, middle);
  let right = a.slice(middle, a.length);
  return merge(merge_sort(left), merge_sort(right));
};

let d = [2, 4, 5, 1, 3, 6, 7, 8];
console.log(merge_sort(d));
```

- rust

```rust

pub fn run() {
    let mut d = [2, 4, 5, 8, 9, 1, 7, 10, 6, 3];
    let n = d.len() - 1;
    quick_sort_rs(&mut d, 0, n);
    println!("{:?}", d);
}

// 이때 함수의 return 값을 명시하지 않는데, 이렇게해도 rust 에서 해당 값을 파악하는데, 이럴 때 명시하려면 어떻게 하는지 확인해봐도 하겠다.
fn quick_sort_rs(a: &mut [i64], start: usize, end: usize) {
    if start >= end {
        return;
    }

    let key = start;
    let mut i = start + 1;
    let mut j = end;

    while i <= j {
        while a[i] < a[key] && i <= end {
            i += 1;
        }
        while a[key] <= a[j] && j > start {
            j -= 1;
        }
        println!("values of i: {}, j: {}, key: {}", a[i], a[j], a[key]);
        if i > j {
            println!("it change key!");
            a.swap(key, j)
        } else {
            println!("it change index!");
            a.swap(i, j)
        }
        println!("{:?}", a);
    }

    quick_sort_rs(a, start, j - 1);
    quick_sort_rs(a, j + 1, end);
}


```
