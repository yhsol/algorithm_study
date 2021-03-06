let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  let answer = 0;
  let box = 0;

  for (let i = 0; i < moves.length; i++) {
    let selected = board[moves[i] - 1].pop();
    if (selected && selected !== 0) {
      if (selected === box) {
        answer += 2;
      } else {
        box = selected;
      }
    }
  }
  return answer;
}

console.log(solution(board, moves));
