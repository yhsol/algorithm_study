// 단어 s의 가운데 글자를 반환하는 함수, solution
// 단어의 길이가 짝수라면 가운데 두글자를 반환

function solution(s) {
  var answer = "";
  let len = s.length;
  let key =
    len % 2 !== 0
      ? [Math.floor(len / 2)]
      : [Math.floor(len / 2 - 1), Math.floor(len / 2)];
  console.log("key: ", key);

  for (let w of key) {
    answer += s[w];
  }
  return answer;
}

function others(s) {
  let len = s.length;
  let mid = Math.floor(len / 2);
  return len % 2 !== 0 ? s[mid] : s[mid - 1] + s[mid];
}

console.log('solution("abcde"): ', others("qwer"));
