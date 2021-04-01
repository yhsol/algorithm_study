function selection_sort(a: number[]) {
  let n = a.length;
  let temp;

  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < n; j++) {
      if (a[min_idx] > a[j]) {
        min_idx = j;
      }
    }
    temp = a[i];
    a[i] = a[min_idx];
    a[min_idx] = temp;
  }
}

let d = [2, 4, 5, 1, 3];
selection_sort(d);
console.log(d);
