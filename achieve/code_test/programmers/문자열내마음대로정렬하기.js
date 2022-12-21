// 문자열로 구성된 리스트 strings
// 정수 n
// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬
// 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

function solution(strings, n) {
  var answer = strings.sort();

  answer = answer.sort((a, b) => {
    let slicedA = a.slice(n).toLowerCase();
    let slicedB = b.slice(n).toLowerCase();
    if (slicedA < slicedB) return -1;
    if (slicedA > slicedB) return 1;
    return 0;
  });

  return answer;
}

solution(["abce", "abcd", "cdx"], 2);
