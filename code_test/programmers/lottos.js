const dict = {
  6: 1,
  5: 2,
  4: 3,
  3: 4,
  2: 5,
  1: 6,
  0: 6,
};

function solution(lottos, win_nums) {
  var answer = [];
  let high = 0;
  let low = 0;
  let yes = 0;
  let zero = 0;

  for (let i of lottos) {
    if (i === 0) {
      zero += 1;
    } else if (win_nums.includes(i)) {
      yes += 1;
    }
  }

  high = yes + zero;
  low = yes;
  return [dict[high], dict[low]];
}

console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
