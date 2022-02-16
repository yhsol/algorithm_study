// const solution = (data) => {
//   let result = [];
//   for (let i = 0; i < data.length - 2; i++) {
//     for (let j = i + 1; j < data.length - 1; j++) {
//       for (let k = j + 1; k < data.length; k++) {
//         if (data[i] + data[j] + data[k] === 0) {
//           let sorted = [data[i], data[j], data[k]].sort().join();
//           if (!result.includes(sorted)) {
//             result.push(sorted);
//           }
//         }
//       }
//     }
//   }
//   return result.map((r) => r.split(",").map((item) => Number(item)));
// };

// const solution = (data) => {
//   let result = [];
//   data.sort();

//   for (let i = 0; i < data.length - 2; i++) {
//     if (i > 0 && data[i] === data[i - 1]) {
//       continue;
//     }

//     let left = i + 1;
//     let right = data.length - 1;

//     while (left < right) {
//       let sum = data[i] + data[left] + data[right];
//       if (sum < 0) left += 1;
//       else if (sum > 0) right -= 1;
//       else {
//         result.push([data[i], data[left], data[right]]);

//         while (left < right && data[left] === data[left + 1]) {
//           left += 1;
//         }
//         while (left < right && data[right] === data[right - 1]) {
//           right -= 1;
//         }

//         left += 1;
//         right -= 1;
//       }
//     }
//   }
//   return result;
// };

// console.log(solution([-1, 0, 1, 2, -1, -4]));

// function solution(v) {
//   var answer = [[]];
//   for (var i = 0; i < v.length; i++) {
//     if (v[0][i] == v[1][i]) {
//       answer[i] = v[2][i];
//     } else if (v[0][i] == v[2][i]) {
//       answer[i] = v[1][i];
//     } else if (v[1][i] == v[2][i]) {
//       answer[i] = v[0][i];
//     }
//   }
//   return answer;
// }

// console.log(
//   solution([
//     [1, 4],
//     [3, 4],
//     [3, 10],
//   ])
// );

// function solution(maps) {
//   let answer = 1;
//   let visited = maps;
//   let queue = [];
//   const dx = [-1, 1, 0, 0];
//   const dy = [0, 0, -1, 1];
//   const n = maps.length;
//   const m = maps[0].length;

//   queue.push([0, 0]);
//   visited[0][0] = 0;

//   while (queue.length > 0) {
//     let size = queue.length;

//     for (let i = 0; i < size; i++) {
//       let [x, y] = queue.shift();

//       for (let j = 0; j < 4; j++) {
//         let nx = x + dx[j];
//         let ny = y + dy[j];

//         if (nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
//           if (nx == n - 1 && ny == m - 1) {
//             return answer += 1;
//           }
//           queue.push([nx, ny]);
//           visited[nx][ny] = 0;
//         }
//       }
//     }
//     answer += 1;
//   }

//   return -1;
// }

// console.log(
//   solution([
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 1],
//   ])
// );

// function solution(skill, skill_trees) {
//   let answer = 0;
//   for (let skill_tree of skill_trees) {
//     let flag = 0;
//     let index = 0;
//     for (let s of skill_tree) {
//       if (index === skill.length) {
//         break;
//       }
//       if (s === skill[index]) {
//         index += 1;
//       } else if (skill.includes(s)) {
//         flag = 1;
//         break;
//       }
//     }
//     if (flag === 0) {
//       answer += 1;
//     }
//   }
//   return answer;
// }

// function solution(skill, skill_trees) {
//   let possible = [];

//   for (let i = 0; i < skill_trees.length; i++) {
//     let isPossible = true;
//     let index = 0;

//     for (let j = 0; j < skill_trees[i].length; j++) {
//       if (skill.includes(skill_trees[i][j])) {
//         if (skill_trees[i][j] === skill[index]) {
//           index++;
//         } else {
//           isPossible = false;
//           break;
//         }
//       }
//     }
//     if (isPossible) possible.push(skill[index]);
//   }
//   return possible;
// }

function solution(total_sp, skills) {
  let answer = [];
  let countOfSkill = skills + 1;
  let fronts = new Set();
  let rears = new Set();
  let root = 0;
  let hasChild = [];

  const dict = {};

  // 선행 없으면 각각 같은 수
  // 후행 갖고 있는 프로퍼티는 후행들의 합
  // { '1': [ 2, 3 ], '3': [ 6, 4, 5 ] }

  for (let [front, rear] of skills) {
    fronts.add(front);
    rears.add(rear);
    dict[front] = dict[front]
      ? { child: [...dict[front]["child"], rear], count: 0 }
      : { child: [rear], count: 0 };
  }

  const dfs = (graph, start) => {
    let visited = [];
    let needVisit = [];

    needVisit.push(start);

    while (needVisit.length) {
      const node = needVisit.pop();

      if (dict[node]) {
        console.log("node: ", dict[node]);
      }

      if (!visited.includes(node)) {
        visited.push(node);
        if (graph[node]) {
          //   needVisit = [...needVisit, ...graph[node]];
        }
      }
    }
    return visited;
  };

  //   console.log(dfs(dict, 1));
  console.log(dict);
  //   for (let front of fronts) {
  //     if (!rears.has(front)) {
  //       root = front;
  //     }
  //   }

  //   for (let c of dict[root]) {
  //     if (c in dict) {
  //       hasChild.push(c);
  //     }
  //   }

  //   console.log("hasChild: ", hasChild);
  //   console.log("dict: ", dict);

  //   for (let p in dict) {
  //     console.log("p: ", p);
  //   }

  //   for (let [front, rear] of skills) {
  //     fronts.add(front);
  //     rears.add(rear);
  //   }
}

console.log(
  solution(121, [
    [1, 2],
    [1, 3],
    [3, 6],
    [3, 4],
    [3, 5],
  ])
);
// => [44, 11, 33, 11, 11, 11]

function vq(v, q) {
  let answer = [];

  for (let state of q) {
    if (state[0] === 2) {
      v[state[1]] = state[2];
    }

    if (state[0] === 1) {
      //   const sliced = v.slice(state[1], state[2] + 1);
      //   const sum = sliced.reduce((accumulator, curr) => accumulator + curr);
      let sum = 0;
      let left = state[1];
      let right = state[2];

      while (left < right) {
        sum = sum + v[left] + v[right];
        left++;
        right--;
      }

      //   let tsum = 0;
      //   for (let j = state[1]; j < state[2] + 1; j++) {
      //     tsum += v[j];
      //   }
      answer.push(sum);
      left = state[1];
      right = state[2];
      sum = 0;
    }
  }

  return answer;
}

// console.log(
//   vq(
//     [1, 2, 3, 4, 5],
//     [
//       [1, 2, 4],
//       [2, 3, 8],
//       [1, 2, 4],
//     ]
//   )
// );
