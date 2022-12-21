function bubble_sort(a: number[]) {
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
  }
}

let d = [2, 4, 5, 1, 3];
bubble_sort(d);
