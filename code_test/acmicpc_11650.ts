let N = 5;
let list = [
  { x: 3, y: 4 },
  { x: 1, y: 1 },
  { x: 1, y: -1 },
  { x: 2, y: 2 },
  { x: 3, y: 3 },
];

let sorted_list = list.sort((a, b) => a.x - b.x);
// sorted_list.sort((a: , b) => {
//   if (a.x === b.x) {
//     return a.y - b.y;
//   }
// });
sorted_list.sort((a, b) => a.x === b.x ? a.y - b.y : a.x - b.y);
console.log(sorted_list);

console.log([11, 2, 22, 1].sort((a, b) => a - b));
