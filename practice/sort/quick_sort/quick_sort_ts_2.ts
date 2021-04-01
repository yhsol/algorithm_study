let partion = function (
  a: number[],
  left: number,
  right: number,
  pivotIdx: number,
) {
  let temp;
  let pivot = a[pivotIdx];
  while (left <= right) {
    while (a[left] < pivot) {
      left++;
    }
    while (a[right] > pivot) {
      right--;
    }
    if (left <= right) {
      temp = a[left];
      a[left] = a[right];
      a[right] = temp;
      left++;
      right--;
    }
  }
  temp = a[left];
  a[left] = a[pivotIdx];
  a[pivotIdx] = temp;
  return left;
};

let quickSort = function (a: number[], left?: number, right?: number) {
  if (!left) left = 0;
  if (!right) right = a.length - 1;
  let pivotIdx = right;
  pivotIdx = partion(a, left, right - 1, pivotIdx);
  if (left < pivotIdx - 1) {
    quickSort(a, left, pivotIdx - 1);
  }
  if (pivotIdx + 1 < right) {
    quickSort(a, pivotIdx + 1, right);
  }
  return a;
};

let d = [2, 4, 6, 8, 9, 7, 3, 5, 1, 10];
quickSort(d);
console.log(d);
