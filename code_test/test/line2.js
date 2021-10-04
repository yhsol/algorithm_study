function isIncludes(arr1, arr2) {
  if (!arr1 || !arr1) return false;
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      return true;
    }
  }
  return false;
}

function solution(v) {
  let dict = { 0: [], 1: [], 2: [] };
  let result = { 0: 0, 1: 0, 2: 0 };

  for (let i = 0; i < v.length; i++) {
    let items = v[i];
    const tmp_dict = { 0: [], 1: [], 2: [] };
    for (let j = 0; j < items.length; j++) {
      tmp_dict[items[j]].push(j);
    }

    dict[0] = [...dict[0], tmp_dict[0]];
    dict[1] = [...dict[1], tmp_dict[1]];
    dict[2] = [...dict[2], tmp_dict[2]];
  }

  console.log(dict);

  for (let item in dict) {
    const row = dict[item];
    // console.log(dict[item], item);
    for (let i = 0; i < row.length; i++) {
      // 배열에 값 존재할 때
      const prev = i > 0 ? row[i - 1] : [];
      const curr = row[i];

      for (let i = 0; i < curr.length; i++) {
        if (Math.abs(curr[i + 1] - curr[i]) !== 1 && !isIncludes(prev, curr)) {
          result[item] += 1;
        }
      }

      // if (curr.length > 0) {
      //   // 다음 배열이 비어있으면 + 1
      //   // 배열 사이에 틈이 있을 경우
      //   if (!isIncludes(prev, curr)) {
      //     result[item] += 1;
      //   }
      // }
    }
  }
  return [result[0], result[1], result[2]];
}

const v = [
  [0, 0, 1, 1, 0],
  [1, 1, 1, 1, 0],
  [2, 2, 2, 1, 2],
  [0, 0, 0, 2, 1],
];
// 위의 경우 0 은 4가 되어야 함

console.log(solution(v));
