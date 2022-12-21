const numbersPos = {
  1: 1.1,
  2: 1.2,
  3: 1.3,
  4: 2.1,
  5: 2.2,
  6: 2.3,
  7: 3.1,
  8: 3.2,
  9: 3.3,
  0: 4.2,
};

function splitForCalc(pos) {
  return String(pos)
    .split(".")
    .map((item) => Number(item));
}

function fingerForMid(pos, left, right, hand) {
  const [x, y] = splitForCalc(pos);
  const [lx, ly] = splitForCalc(left);
  const [rx, ry] = splitForCalc(right);
  const leftDistance = Math.abs(x - lx) + Math.abs(y - ly);
  const rightDistance = Math.abs(x - rx) + Math.abs(y - ry);

  if (leftDistance > rightDistance) return "R";

  if (leftDistance < rightDistance) return "L";

  if (leftDistance === rightDistance) {
    if (hand === "left") return "L";
    if (hand === "right") return "R";
  }
}

function solution(numbers, hand) {
  var answer = "";
  let posNumbers = numbers.map((item) => numbersPos[item]);
  let posLeft = [numbersPos[1], numbersPos[4], numbersPos[7]];
  let posRight = [numbersPos[3], numbersPos[6], numbersPos[9]];
  let posMid = [numbersPos[2], numbersPos[5], numbersPos[8], numbersPos[0]];
  let whereLeft = 4.1;
  let whereRight = 4.3;

  for (let i of posNumbers) {
    if (posLeft.includes(i)) {
      answer += "L";
      whereLeft = i;
    }
    if (posRight.includes(i)) {
      answer += "R";
      whereRight = i;
    }
    if (posMid.includes(i)) {
      const closer = fingerForMid(i, whereLeft, whereRight, hand);
      if (closer === "L") {
        answer += "L";
        whereLeft = i;
      }
      if (closer === "R") {
        answer += "R";
        whereRight = i;
      }
    }
  }

  return answer;
}
