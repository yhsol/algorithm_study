function quick_sort_ts_3(a: number[], start: number, end: number) {
  if (start >= end) {
    return;
  }

  let key = start;
  let i = start + 1;
  let j = end;

  while (i < j) {
    while (a[i] <= a[key] && i <= end) {
      i++;
    }
    while (a[key] < a[j] && j > start) {
      j--;
    }

    if (i > j) {
      [a[key], a[j]] = [a[j], a[key]];
    } else {
      [a[i], a[j]] = [a[j], a[i]];
    }
  }
  quick_sort_ts_3(a, start, j - 1);
  quick_sort_ts_3(a, j + 1, end);
}

let d = [2, 4, 5, 1, 3];
quick_sort_ts_3(d, 0, d.length - 1);
console.log(d);
