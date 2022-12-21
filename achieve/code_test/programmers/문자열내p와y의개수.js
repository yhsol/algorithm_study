function solution(s) {
  var answer = true;
  let text = s.toLowerCase();
  let key = 0;

  for (let i of text) {
    if (i == "p") {
      key++;
    }
    if (i == "y") {
      key--;
    }
  }

  if (key == 0) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}

function solution2(s) {
  var answer = true;
  let text = s.toLowerCase();
  let p = 0;
  let y = 0;

  for (let i of text) {
    if (i == "p") {
      p++;
    }
    if (i == "y") {
      y++;
    }
  }

  if (p == y) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}
