const sorted: number[] = [];

const merge = function (
  a: number[],
  m: number,
  middle: number,
  n: number,
) {
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
