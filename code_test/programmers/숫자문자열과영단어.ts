// 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 주면 원래 숫자를 찾는 게임
// 1478 => one4seveneight
// 234567 => 23four5six7
// 10203 => 1zerotwozero3
// 원래 숫자 return
// 1 <= s <= 50
// s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않음
// return 값이 1 이상 2000000000 이하의 정수가 되는 올바른 입력만 s 로 주어짐.
const numDict: Record<string, string> = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const test = "23four5six7"; //=> 1478

function solution(s: string) {
  let result = "";
  let temp = "";
  for (const a of s) {
    // numeric value
    if (!isNaN(Number(a))) {
      result += a;
      continue;
    }

    // string value
    temp += a;
    if (temp in numDict) {
      result += numDict[temp];
      temp = "";
    }
  }

  return result;
}

// using index
const nums = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solutionUsingIndex(s: string) {
  let result = s;

  for (let i = 0; i < nums.length; i++) {
    // 여기서 nums[i] 로 split 이 가능하다는 것은 해당 index 값에 매칭 되는 숫자 값이 있다는 것
    // 그러므로 아래에서 String(i) 를 통해 arr.join 을 하게되면
    // split 된 앞, 뒤 사이에 그 indedx 값 즉 예를들면 'four'라는 문자열의 index 값인 4 가 할당되게 되는 것.
    let arr = result.split(nums[i]);
    console.log("arr: ", arr);
    result = arr.join(String(i));
    console.log("arr.join(String(i)): ", arr.join(String(i)));
    console.log("String(i): ", String(i));
  }

  return Number(result);
}

console.log(solutionUsingIndex(test));
