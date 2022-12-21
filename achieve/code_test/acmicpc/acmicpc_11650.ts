let N = 5;
let list = [
  { x: 3, y: 4 },
  { x: 1, y: 1 },
  { x: 1, y: -1 },
  { x: 2, y: 2 },
  { x: 3, y: 3 },
];

let array_list = [
  [3, 4],
  [1, 1],
  [1, -1],
  [2, 4],
  [3, 3],
];

let sorted_list = list.sort((a, b) => a.x - b.x);
// let sorted_array_list = array_list.sort((a, b) => a[0] - b[0]);
let sorted_array_list = array_list.sort(function (a, b): number {
  let sorted_result = 0;
  sorted_result = a[0] - b[0];
  if (a[0] === b[0]) {
    sorted_result = a[1] - b[1];
  }
  return sorted_result;
});
let sorted_array_list_arrow = array_list.sort((a, b) => {
  let sorted_result = 0;
  sorted_result = a[0] - b[0];
  if (a[0] === b[0]) {
    sorted_result = a[1] - b[1];
  }
  return sorted_result;
});
// sorted_list.sort((a: , b) => {
//   if (a.x === b.x) {
//     return a.y - b.y;
//   }
// });
sorted_list.sort((a, b) => a.x === b.x ? a.y - b.y : a.x - b.y);
// sorted_array_list.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
console.log(sorted_array_list_arrow);

// console.log(sorted_list);

// console.log([11, 2, 22, 1].sort((a, b) => a - b));
