function selSort(a: number[]) {
  const n = a.length;

  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[min_idx]) {
        min_idx = j;
      }
    }
    [a[i], a[min_idx]] = [a[min_idx], a[i]];
  }

  return a;
}

let d = [2, 4, 5, 1, 3];
console.log(selSort(d));
