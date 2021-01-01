// 동명이인 찾기

let names: string[] = ["Tom", "Jerry", "Mike", "Tom", "Jerry", "Mike"];

function findSameName(names: string[]) {
  let same = new Set();
  for (let i = 0; i < names.length - 1; i++) {
    for (let j = i + 1; j < names.length; j++) {
      if (names[i] === names[j]) {
        same.add(names[i]);
      }
    }
  }
  return same;
}

console.log(findSameName(names));
