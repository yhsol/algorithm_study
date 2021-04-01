function insertion_sort(a: number[]) {
  for (let i = 0; i < a.length; i++) {
    let j = i;
    while (a[j - 1] > a[j]) {
      [a[j - 1], a[j]] = [a[j], a[j - 1]];
      j--;
    }
  }
}

function insertion_sort_2(a: number[]) {
  for (let i = 0; i < a.length; i++) {
    let key = a[i];
    let j = i;
    while (j >= 0 && a[j - 1] > key) {
      a[j] = a[j - 1];
      // console.log(a);
      // console.log("j: ", j);
      // console.log("j-1: ", j - 1);

      // 아래에서 바로 a[j -1] = key; 가 아니라
      // j--; 의 과정을 거치는 이유는 탐색 범위를 줄여나가야 하기 때문인듯하다.

      j--;
      // console.log("j--: ", j);
      // console.log("key: ", key);
      a[j] = key;
      // console.log("a[j - 1]: ", a[j - 1]);
    }
  }
}

let d = [2, 4, 5, 1, 3];
insertion_sort_2(d);
console.log(d);
