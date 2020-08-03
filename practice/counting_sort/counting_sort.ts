let countingSort = function (a: number[], k: number) {
  let count = [], result: any = [];
  for (let i = 0; i <= k; i++) {
    count[i] = 0;
  }
  console.log(count, result, a.length);
  for (let j = 0; j < a.length; j++) {
    count[a[j]] += 1;
  }
  console.log(count, result, k);
  for (let i = 0; i < k; i++) {
    count[i + 1] += count[i];
  }
  console.log(count, result);
  for (let j = 0; j < a.length; j++) {
    console.log(a[j], count[a[j]] - 1);
    result[count[a[j]] - 1] = a[j];
    count[a[j]] -= 1;
  }
  console.log(count, result);
  return result;
};

countingSort([3, 4, 0, 1, 2, 4, 2, 4], 4);
