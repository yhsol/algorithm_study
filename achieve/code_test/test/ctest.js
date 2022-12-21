function isPrime(n) {
  for (let i = 2; i < Math.sqrt(n) + 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function one(nums) {
  let answer = 0;
  let len = nums.length;

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) answer += 1;
      }
    }
  }

  return answer;
}

console.log("one: ", one([1, 2, 3, 4]));
//=> 1

function two(maps) {
  let answer = -1;
  let visited = maps;
  let queue = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const n = maps.length;
  const m = maps[0].length;

  queue.push([0, 0]);
  visited[0][0] = 0;

  while (queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
          if (nx === n - 1 && ny === m - 1) {
            return (answer += 1);
          }
          queue.push([nx, ny]);
          visited[nx][ny] = 0;
        }
      }
    }
    answer += 1;
  }
  return -1;
}

console.log(
  "two: ",
  two([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
//=> -1

function three(v) {
  let answer = [[]];

  for (let i = 0; i < v.length; i++) {
    if (v[0][1] === v[1][i]) {
      answer[i] = v[2][i];
      continue;
    }

    if (v[0][i] === v[2][i]) {
      answer[i] = v[1][i];
      continue;
    }

    if (v[1][i] === v[2][i]) {
      answer[i] = v[0][i];
    }
  }

  return answer;
}

console.log(
  "three: ",
  three([
    [1, 4],
    [3, 4],
    [3, 10],
  ])
);
//=> [1, 10]

function four() {}

function five(total_sp, skills) {
  let answer = [];

  const dict = {};

  for (let [front, rear] of skills) {
    dict[front] = dict[front] ? [...dict[front], rear] : [rear];
  }

  return answer;
}

console.log(
  "five: ",
  five(121, [
    [1, 2],
    [1, 3],
    [3, 6],
    [3, 4],
    [3, 5],
  ])
);
// => [44, 11, 33, 11, 11, 11]

function six(v, q) {
  let answer = [];

  //   for (let i = 0; i < q.length; i++) {
  //     if (q[i][0] === 1) {
  //       let sum = 0;
  //       for (let j = q[i][1]; j < q[i][2] + 1; j++) sum += v[j];
  //       answer.push(sum);
  //     }

  //     if (q[i][0] === 2) {
  //       v[q[i][1]] = q[i][2];
  //     }
  //   }

  for (let state of q) {
    if (state[0] === 1) {
      const sliced = v.slice(state[1], state[2] + 1);
      const sum = sliced.reduce((acc, curr) => acc + curr);
      answer.push(sum);
    }

    if (state[0] === 2) v[state[1]] = state[2];
  }

  return answer;
}

console.log(
  "six: ",
  six(
    [1, 2, 3, 4, 5],
    [
      [1, 2, 4],
      [2, 3, 8],
      [1, 2, 4],
    ]
  )
);
//=> [12, 16]
