let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

let filteredBoard = board.map((item) => item.filter((item) => item !== 0));

function solution(board: number[][], moves: number[]) {
  let answer = 0;
  let box = [];

  for (let i of moves) {
    let selectShell = board[i - 1];

    if (selectShell.length === 0) {
      continue;
    }

    if (box.length == 0) {
      box.push(selectShell[selectShell.length - 1]);
      selectShell.pop();
    }

    if (selectShell[selectShell.length - 1] != box[selectShell.length - 1]) {
      box.push(selectShell[selectShell.length - 1]);
      selectShell.pop();
    }

    if (selectShell[selectShell.length - 1] == box[selectShell.length - 1]) {
      box.pop();
      selectShell.pop();
      answer += 2;
    }
  }
  return answer;
}

console.log(solution(filteredBoard, moves));
