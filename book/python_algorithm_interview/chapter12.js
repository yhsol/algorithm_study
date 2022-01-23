const graph = {
  1: [2, 3, 4],
  2: [5],
  3: [5],
  4: [],
  5: [6, 7],
  6: [],
  7: [3],
};

function recursiveDfs(v, discovered = []) {
  discovered.push(v);
  for (const w of graph[v]) {
    if (!discovered.includes(w)) {
      discovered = recursiveDfs(w, discovered);
    }
  }
  return discovered;
}

function recursive_dfs(v, discoverd = []) {
  discoverd.push(v); // 들렸음
  for (let w of graph[v]) {
    // w 를 체크 안했으면
    if (!discoverd.includes(w)) {
      discoverd = recursive_dfs(w, discoverd); // 다시 dfs 돌림
    }
  }
  // 전체를 순회하고 나면
  return discoverd;
}

function iterative_dfs(startV) {
  let discovered = []; // 방문한 리스트
  let stack = [startV];
  while (stack.length !== 0) {
    let v = stack.pop(); // 스택에서 하나 뺌
    // 방문 안했으면
    if (!discovered.includes(v)) {
      // 방문한 곳에 표시
      discovered.push(v);
      //   for (let w of graph[v]) {
      //     // 스택에 추가 => 그러면 while 지속
      //     stack.push(w);
      //   }
      stack = [...graph[v], ...stack];
    }
  }
  return discovered;
}

const dfs = (graph, start) => {
  const visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(start); // 노드 탐색 시작

  while (needVisit.length !== 0) {
    // 탐색해야할 노드가 남아있다면
    const node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...graph[node], ...needVisit];
    }
  }
  return visited;
};

const iterative_bfs = (startV) => {
  let discoverd = [startV];
  let queue = [startV];
  while (queue.length) {
    let v = queue.shift();
    for (let w of graph[v]) {
      if (!discoverd.includes(w)) {
        discoverd.push(w);
        queue.push(w);
      }
    }
  }
  return discoverd;
};

const bfs = (graph, start) => {
  let visited = []; // 탐색을 마친 노드들
  let needVisit = []; // 탐색해야할 노드들

  needVisit.push(start); // 노드 탐색 시작

  while (needVisit.length) {
    // 탐색해야할 노드가 남아있다면
    let node = needVisit.shift(); // queue이기 때문에 선입선출, shift()를 사용
    if (!visited.includes(node)) {
      // 해당 노드가 탐색된 적 없다면
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
};

// console.log("dfs: ", dfs(graph, 1));

function iterativeDfs(startV) {
  let discovered = [];
  let stack = [startV];
  while (stack.length) {
    let v = stack.pop();
    if (!discovered.includes(v)) {
      discovered.push(v);
      for (const w of graph[v]) {
        stack.push(w);
      }
    }
  }
  return discovered;
}

function iterativeBfs(startV) {
  let discovered = [startV];
  let queue = [startV];
  while (queue.length) {
    let v = queue.shift();
    for (let w of graph[v]) {
      if (!discovered.includes(w)) {
        discovered.push(w);
        queue.push(w);
      }
    }
  }
  return discovered;
}

// console.log("recursive: ", recursiveDfs(1));
// console.log("iterativeDfs: ", iterativeDfs(1));
// console.log("iterativeBfs: ", iterativeBfs(1));

function countOfIsland(grid) {
  const dfs = (i, j) => {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] != "1"
    ) {
      return;
    }

    grid[i][j] = 0;
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == "1") {
        dfs(i, j);
        count += 1;
      }
    }
  }
  return count;
}
// console.log(
//   countOfIsland([
//     [1, 1, 1, 1, 0],
//     [1, 1, 0, 1, 0],
//     [1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//   ])
// );
//=> 1

function letterCombinations(digits) {
  if (!digits) return [];
  let result = [];
  let dic = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const dfs = (index, path) => {
    if (path.length === digits.length) {
      result.push(path);
      return;
    }

    for (let i = index; i < digits.length; i++) {
      for (let j of dic[digits[i]]) {
        dfs(i + 1, path + j);
      }
    }
  };

  dfs(0, "");

  return result;
}

// console.log("letterCombinations: ", letterCombinations("23"));

function permute(nums) {
  let results = [];
  let prevElements = [];

  const dfs = (elements) => {
    if (elements.length === 0) {
      results.push([...prevElements]);
    }

    for (let e of elements) {
      let nextElements = [...elements];
      let filtered = nextElements.filter((element) => element !== e);

      prevElements.push(e);
      dfs(filtered);
      prevElements.pop();
    }
  };

  dfs(nums);
  return results;
}

// console.log("permute: ", permute([1, 2, 3]));

function subsets(nums) {
  result = [];

  function dfs(index, path) {
    result.push(path);

    for (let i = index; i < nums.length; i++) {
      dfs(i + 1, [...path, ...[nums[i]]]);
    }
  }

  dfs(0, []);
  return result;
}

// console.log("subsets: ", subsets([1, 2, 3]));

const phoneNumDict = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

const combine_phone_num = (digits) => {
  let result = [];
  const dfs = (index, path) => {
    if (path.length === digits.length) {
      result.push(path);
      return;
    }

    for (let i = index; i < digits.length; i++) {
      for (let j of phoneNumDict[digits[i]]) {
        dfs(i + 1, path + j);
      }
    }
  };

  if (!digits) return [];

  dfs(0, "");

  return result;
};

// console.log(combine_phone_num("23"));

const dfs_permute = (_input) => {
  if (!_input || !_input.length) return [];

  result = [];

  const dfs = (graph, start) => {
    let visited = [];
    let needVisit = [];

    needVisit.push(start);

    while (needVisit.length) {
      const node = needVisit.pop();
      if (!visited.includes(node)) {
        visited.push(node);
        needVisit = [...needVisit, ...graph[node]];
      }
    }
  };

  dfs(_input, _input[0]);
  return result;
};

const cache = (cacheSize, cities) => {
  let time = 0;
  let cache = [];
  const applyLimit = (arr, maxSize) =>
    arr.slice(arr.length - maxSize, arr.length);

  for (let c of cities) {
    c = c.toLowerCase();
    if (cache.length > cacheSize) {
      cache = applyLimit(cache, cities.length);
    }

    if (cache.includes(c)) {
      cache = cache.filter((data) => data !== c);
      cache.push(c);
      time += 1;
    } else {
      cache.push(c);
      time += 5;
    }
  }

  return time;
};

// console.log(cache(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));
