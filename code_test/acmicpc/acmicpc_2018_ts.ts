let N = 5;
let arr = [2, 2, 1, 2, 2];

function run(arr: number[]) {
  let average = 0;
  let median = 0;
  let many = 0;
  let range = 0;

  arr.sort();

  // average
  for (let i = 0; i < arr.length - 1; i++) {
    average++;
  }
  average / 2;

  // median
  let mid = Math.ceil(arr.length / 2);
  median = arr[mid];

  // many
  // let obj = {};
  // for (let i = 0; i < arr.length - 1; i++) {
  //   if (!!obj[i]) {
  //     obj[i] += 1;
  //   } else {
  //     obj[i] = 1;
  //   }
  // }
  // many = obj;

  // range
  range = arr[arr.length - 1] - arr[0];

  return { average, median, many, range };
}

console.log(run(arr).average);
console.log(run(arr).median);
console.log(run(arr).many);
console.log(run(arr).range);
