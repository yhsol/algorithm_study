function selection_sort(a: number[]) {
  let n = a.length;
  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[min_idx]) {
        min_idx = j;
      }
    }
    console.log("min_idx: ", a[min_idx]);
    console.log("array: ", a);
    [a[i], a[min_idx]] = [a[min_idx], a[i]];
  }
}

let d = [2, 4, 5, 1, 3];
selection_sort(d);
console.log(d);
