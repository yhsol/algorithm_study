// Given an integer array nums,
// return an array answer
// such that answer[i] is equal to the product of all the elements of nums except nums[i].

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// 배열을 입력받아 output[i]가 자신을 제외한 나머지 모든 요소의 곱셈 결과가 되도록 출력하라.

// 문제: 숫자가 들어있는 배열을 받아서, 리턴하는 배열에는 나(curr) 를 제외한 나머지 인덱스들을 모두 곱한 값이 들어가도록 해야한다.
// => [1,2,3,4] 를 받았을 때, 1 인 인덱스 0 자리에는 2*3*4 가 들어가는 것.
// => 이걸 O(n) 에 풀려면 어째야 할까.
// 나눗셈 안됨.
// 나눗셈을 한다면, 일단 전부 다 곱하고 나서, 그걸 내 차례일 때 그 값으로 나누면 될 듯?
// 나눗셈을 안한다면, 한번의 반복으로 어떻게 풀면 될까.

// 풀이 1: 브루트 포스
// 배열을 순회하면서 각 순회 시점에 배열을 한번씩 더 돌면서 현재 위치를 제외한 나머지 위치의 값들의 곱을 구하고, 그걸 결과 배열에 넣는다.

// 풀이 2:
// 현재를 기준으로 왼쪽으로 한번, 오른쪽으로 한번 순회하면서 곱셈을 한다.
// 왼쪽에서 시작해서 곱셈을 하기 시작하면 오른쪽에 있는 값들을 제외한, 나를 제외한 값들의 곱을 구할 수 있음.
// 오른쪽도 마찬가지.
// 그러면, 최종적으로 양쪽을 곱하면 답이 나온다.

// 알고리즘
// 여기서의 알고리즘은, results 에 있는 나의 인덱스 자리에 미리 한방향으로 순회하면서 곱해지는 값을 넣어두고,
// 그 다음에 나머지 방향으로 순회하면서 곱해지는 값을 넣어주는 것.

const nums = [1, 2, 3, 4];

function productExceptSelf(nums: number[]): number[] {
  let results: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let multiply = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        multiply *= nums[j];
      }
    }
    results[i] = multiply;
  }

  return results;
}

function productExceptSelfWhileLoop(nums: number[]): number[] {
  let results: number[] = [];

  let left = 0;
  let right = nums.length - 1;

  let q = 1;

  while (left < nums.length) {
    results[left] = q;
    q = q * nums[left];
    left++;
  }

  q = 1;

  while (right >= 0) {
    results[right] = results[right] * q;
    q = q * nums[right];
    right--;
  }

  return results;
}

function productExceptSelfForLoop(nums: number[]): number[] {
  let results: number[] = [];

  let p = 1;

  for (let i = 0; i < nums.length; i++) {
    results[i] = p;
    p = p * nums[i];
  }

  p = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    results[i] = results[i] * p;
    p = p * nums[i];
  }

  return results;
}

console.log(productExceptSelf(nums));

// 아래는 copilot 의 풀이

// 풀이: 나눗셈을 사용하면 쉽게 풀 수 있다. 하지만 나눗셈을 사용하지 않고 풀어보자.
// => 왼쪽 곱셈 결과에 오른쪽 값을 차례대로 곱셈
// => 오른쪽 곱셈 결과에 왼쪽 값을 차례대로 곱셈
// => 왼쪽 곱셈 결과에 오른쪽 곱셈 결과를 차례대로 곱셈

// function productExceptSelf(nums: number[]): number[] {
//   const results: number[] = [];

//   // multiply all numbers in nums
//   const multiplyAll = nums.reduce((acc, curr) => acc * curr, 1);

//   // divide multiplyAll by each number in nums
//   for (let v of nums) {
//     results.push(multiplyAll / v);
//   }

//   return results;
// }

// 풀이: 왼쪽 곱셈 결과에 오른쪽 값을 차례대로 곱셈
// => 왼쪽 곱셈 결과를 담을 배열을 만들고, 1로 초기화
// => 왼쪽 곱셈 결과를 담을 배열을 순회하면서, 왼쪽 곱셈 결과를 담을 배열의 값을 갱신
// => 오른쪽 곱셈 결과를 담을 배열을 만들고, 1로 초기화
// => 오른쪽 곱셈 결과를 담을 배열을 역순으로 순회하면서, 오른쪽 곱셈 결과를 담을 배열의 값을 갱신
// => 왼쪽 곱셈 결과를 담을 배열과 오른쪽 곱셈 결과를 담을 배열을 순회하면서, 왼쪽 곱셈 결과를 담을 배열의 값을 갱신

// nums.forEach((v, i) => {
//   results[i] = nums.reduce((acc, curr, idx) => {
//     if (idx !== i) {
//       return acc * curr;
//     }
//     return acc;
//   }, 1);
// });
