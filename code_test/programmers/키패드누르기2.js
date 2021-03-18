const numberDict = {
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

function solution(numbers, hand) {
  var answer = "";
  let changedNumbers = numbers.map((item) => numberDict[item]);
  let left_number = [numberDict[1], numberDict[4], numberDict[7]];
  let right_number = [numberDict[3], numberDict[6], numberDict[9]];
  let mid_number = [numberDict[2], numberDict[5], numberDict[8], numberDict[0]];
  let where_left = 4.1;
  let where_right = 4.3;

  for (let i of changedNumbers) {
    if (left_number.includes(i)) {
      answer += "L";
      where_left = i;
    }
    if (right_number.includes(i)) {
      answer += "R";
      where_right = i;
    }
    if (mid_number.includes(i)) {
      const closer = fingerForMid(i, where_left, where_right, hand);
      if (closer === "L") {
        answer += "L";
        where_left = i;
      }
      if (closer === "R") {
        answer += "R";
        where_right = i;
      }
    }
  }

  return answer;
}

function fingerForMid(pos, left, right, hand) {
  const [x, y] = splitForCalc(pos);
  const [lx, ly] = splitForCalc(left);
  const [rx, ry] = splitForCalc(right);
  const leftDistance = Math.abs(x - lx) + Math.abs(y - ly);
  const rightDistance = Math.abs(x - rx) + Math.abs(y - ry);
  if (leftDistance > rightDistance) {
    return "R";
  }
  if (leftDistance < rightDistance) {
    return "L";
  }
  if (leftDistance === rightDistance) {
    if (hand === "left") {
      return "L";
    }
    if (hand === "right") {
      return "R";
    }
  }
}

function splitForCalc(pos) {
  return String(pos)
    .split(".")
    .map((item) => Number(item));
}
