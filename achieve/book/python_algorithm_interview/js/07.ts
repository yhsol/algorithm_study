const solution = (nums: number[], target: number) => {
  // brute-force
  //   for (let i = 0; i < nums.length - 1; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] + nums[j] === target) {
  //         return [i, j];
  //       }
  //     }
  //   }
  // tow-pointer ? 를 쓸 수 없네. 순서대로 들어오는게 아님. 그렇다고 정렬을 할 수도 없음. 인덱스를 뽑아야 하니까.
  //   let left = 0;
  //   let right = nums.length - 1;
  //   while (left < right) {
  //     const temp = nums[left] + nums[right];
  //     if (temp === target) return [left, right];
  //     if (temp > target) {
  //       right -= 1;
  //     } else {
  //       left += 1;
  //     }
  //   }

  // target 에서 비교값을 뺀 값이 나머지 배열 안에 있는지 확인하고, 있다면 그 인덱스를 찾아서 리턴.
  // 근데 왜 브루트포스보다 느리게나오지????
  //   for (let i = 0; i < nums.length; i++) {
  //     const rest = nums.slice(i + 1);
  //     if (rest.includes(target - nums[i])) {
  //       return [i, rest.indexOf(target - nums[i]) + i + 1];
  //     } else {
  //       continue;
  //     }
  //   }

  // 객체를 활용
  // 배열 전체를 돌면서 객체에 nums 배열의 밸류를 키로, 키를 밸류로 잡음.
  // 그리고 다시 nums 를 돌면서 target 에서 밸류를 뺀 값을 가지고 그게 새로 만든 객체(nums_map)에 있는지, 그리고 그 값의 밸류가 현재 인덱스랑 다른지 확인 후 리턴
  // 새로 객체를 만들고, 거기에 밸류를 키로, 인덱스를 밸류로 잡는 생각 !
  let nums_map = {};

  for (let [i, v] of Object.entries(nums)) {
    nums_map[v] = Number(i);
  }

  for (let [i, v] of Object.entries(nums)) {
    const index = Number(i);
    if (target - v in nums_map && index !== nums_map[target - v]) {
      return [index, nums_map[target - v]];
    }
  }
};

console.log(solution([3, 2, 4], 6));

export {};
