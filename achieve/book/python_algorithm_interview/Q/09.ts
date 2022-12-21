// not contain duplicate triplets.

// 더해서 세개가 돼야함.
// 알고리즘은? =>
// - 배열을 순회하면서 합이 0인 값 세개를 찾아야함.
// - 그러려면, 정렬해서 투포인터 사용. 정렬하고 가장 앞에 값을 curr 로 잡고, 나머지 구간을 투포인터 순회.
// - 위의 방식으로 순회하면서 가능성 있는 구간을 다 돌면 리턴.
// - 정렬했을 때, 앞의 수가 이미 0보다 크면 가망 없음. 리턴.

function threeSumBrouteForce(nums: number[]): number[][] {
  const results: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (sum === 0) {
          const target = [nums[i], nums[j], nums[k]].sort();
          const isDup = results.some((v) => v.toString() === target.toString());
          if (!isDup) {
            results.push(target);
          }
        }
      }
    }
  }

  return results;
}

function threeSum(nums: number[]): number[][] {
  const results: number[][] = [];

  // sort
  nums.sort((a, b) => a - b);

  if (nums[0] > 0) return results;

  // loop with curr
  for (const [curr, _] of nums.entries()) {
    if (curr > 0 && nums[curr] === nums[curr - 1]) continue;

    // two pointer
    let left = curr + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[curr] + nums[left] + nums[right];

      if (sum === 0) {
        results.push([nums[curr], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left += 1;
        while (left < right && nums[right] === nums[right - 1]) right -= 1;
        // 얼핏 생각해보면 left 또는 right 둘 중 하나만 이동해야 하는 게 아닌가 싶지만, 어차피
        // sum=0인 상황이므로 어느 한쪽만 이동하는 경우는 불가능하다.
        left += 1;
        right -= 1;
      } else if (sum < 0) {
        left += 1;
      } else if (sum > 0) {
        right -= 1;
      }
    }
  }

  return [...new Set(results.map((item) => JSON.stringify(item)))].map((item) =>
    JSON.parse(item)
  );
}

const nums = [-1, 0, 1, 2, -1, -4];
// [-3,-1,4] 있는지 확인.
console.log(threeSum(nums));
//=> [[-1,-1,2],[-1,0,1]]
