function selection_sort(a: number[]) {
  let n = a.length;
  for (let i = 0; i < n - 1; i++) {
    // 최초 최소 값으로 첫번째 값을 선택
    let min_idx = i;
    console.log("min_idx1: ", min_idx);

    // 자신(i) 를 제외한 나머지 값과 비교
    for (let j = i + 1; j < n; j++) {
      // 최솟값의 인덱스를 찾아서 min_idx 에 담기
      if (a[j] < a[min_idx]) {
        min_idx = j;
        console.log("j: ", j);
        console.log("min_idx2: ", min_idx);
        console.log("a[min_idx]: ", a[min_idx]);
      }
    }
    // console.log("min_idx: ", a[min_idx]);
    // console.log("array: ", a);
    // 배열에서 찾은 최솟값과 기존 최솟값의 위치를 swap
    [a[i], a[min_idx]] = [a[min_idx], a[i]];
  }
}

let d = [2, 4, 5, 1, 3];
selection_sort(d);
// console.log(d);
