function solution(numbers, hand) {
  var answer = "";
  let left_number = [(1, 1.1), (4, 2.1), (7, 3.1)];
  let right_number = [(3, 1.3), (6, 2.3), (9, 3.3)];
  let mid_number = [(2, 1.2), (5, 2.2), (8, 3.2), (0, 4.2)];
  let where_left = 4.1;
  let where_right = 4.3;

  for (let i of numbers) {
    if (left_number.includes(i[0])) {
      answer += "L";
      where_left = i[1];
    }
    if (right_number.includes(i[0])) {
      answer += "R";
      where_right = i[1];
    }
    if (mid_number.includes(i[0])) {
      const closer = fingerForMid(i[1], where_left, where_right, hand);
      if (closer === "L") {
        answer += "L";
        where_left = i[1];
      }
      if (closer === "R") {
        answer += "R";
        where_right = i[1];
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
  const rightDistance = Math.abs(x - rx) + Math.abs(x - ry);
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
