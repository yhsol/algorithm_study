const merge = function (left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
};

const merge_sort = function (a) {
  if (a.length < 2) return a;
  let middle = Math.floor(a.length / 2);
  let left = a.slice(0, middle);
  let right = a.slice(middle, a.length);
  return merge(merge_sort(left), merge_sort(right));
};

let d = [2, 4, 5, 1, 3, 6, 7, 8];
console.log(merge_sort(d));
