const solution = (str: string) => {
  let result = "";

  // 예외 처리 먼저
  if (str.length < 2 || str === str.split("").reverse().join("")) {
    return str;
  }

  // 문자열 처음부터 끝가지 우측으로 이동
  const expand = (left: number, right: number): string => {
    // palindrome 을 판별하고, 확인되면 (str[left] === str[right]) left, right 를 확장함.
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left -= 1;
      right += 1;
    }
    return str.slice(left + 1, right);
  };

  // 전체를 돌면서, 하나씩 확장하는 버전, 두개씩 확장하는 버전으로 나눠서 출력된 값을 비교해서 큰 값을 리턴.
  for (let [i, v] of Object.entries(str)) {
    const index = Number(i);
    if (result.length < expand(index, index + 1).length) {
      result = expand(index, index + 1);
    }

    if (result.length < expand(index, index + 2).length) {
      result = expand(index, index + 2);
    }
  }

  return result;
};

console.log(solution("babad"));
