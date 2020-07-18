function quick_sort(a: number[], start: number, end: number) {
  if (start >= end) {
    return;
  }

  let key = start;
  let i = start + 1;
  let j = end;
  let temp;

  while (i <= j) {
    while (i <= end && a[i] <= a[key]) {
      i++;
    }
    while (j > start && a[j] >= a[key]) {
      j--;
    }
    if (i > j) {
      // temp = a[j];
      // a[j] = a[key];
      // a[key] = temp;
      [a[j], a[key]] = [a[key], a[j]];
    } else {
      // temp = a[i];
      // a[i] = a[j];
      // a[j] = temp;

      // destructuring assignment swap 이 동작을 이상하게 하는 줄 알았다.
      // 그래서 temp 를 만들고 swap 했더니 잘 된다.
      // 다시보니 여기서도 key 와 swap 하고 있었다.
      // 기능을 탓하기 전에 잘 확인하자!
      // destructuring assignment swap 를 쓰면 안되는 것인가 했는데 써도 되겠다.
      // 그렇기는 하지만 예외 케이스라던가 하는 경우에 대해서 생각도 해보고 찾아보기도 해야겠다.
      [a[i], a[j]] = [a[j], a[i]];
    }
  }

  quick_sort(a, start, j - 1);
  quick_sort(a, j + 1, end);
}

let d = [2, 4, 5, 1, 3];
quick_sort(d, 0, d.length - 1);
console.log(d);
