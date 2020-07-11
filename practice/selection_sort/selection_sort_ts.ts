function selection_sort(a: number[]) {
  let n = a.length;
  for (let i = 0; i < n - 1; i++) {
    // 최초 최소 값으로 첫번째 값을 선택
    let min_idx = i;
    // console.log("min_idx1: ", min_idx);

    // 자신(i) 를 제외한 나머지 값과 비교
    for (let j = i + 1; j < n; j++) {
      console.log("j: ", j);
      // 최솟값의 인덱스를 찾아서 min_idx 에 담기
      if (a[j] < a[min_idx]) {
        min_idx = j;
        // console.log("j: ", j);
        // console.log("min_idx2: ", min_idx);
        // console.log("a[min_idx]: ", a[min_idx]);
      }
    }
    // console.log("min_idx: ", a[min_idx]);
    // console.log("array: ", a);
    // 배열에서 찾은 최솟값과 기존 최솟값의 위치를 swap
    [a[i], a[min_idx]] = [a[min_idx], a[i]];
    console.log("a: ", a);
  }
}

let d = [5, 2, 4, 5, 1, 3];
// d.shift();
// let t = d.slice(1, d.length);
selection_sort(d);
// console.log(d);

function selection_sort_boj(a: number[]) {
  let arr = a.slice(1, a.length);
  console.log(arr);
  let n = arr.length;
  console.log(n);
  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }

    [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
    console.log("arr: ", arr);
    return arr;
  }
}

let d_boj = [5, 2, 4, 5, 1, 3];
console.log();
selection_sort_boj(d_boj);
