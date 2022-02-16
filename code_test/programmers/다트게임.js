// 다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임
// 다트 게임은 총 3번의 기회
// 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지
// 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고
// 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
// 옵션으로 스타상(*) , 아차상(#)이 존재하며
// 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
// 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
// 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
// Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
// 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
// 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.
// "점수|보너스|[옵션]"으로 이루어진 문자열 3세트. 예) 1S2D*3T
// 점수는 0에서 10 사이의 정수이다.
// 보너스는 S, D, T 중 하나이다.
// 옵선은 *이나 # 중 하나이며, 없을 수도 있다.

const getS = (args) => args * 1;
const getD = (args) => args * 2;
const gett = (args) => args * 3;

function solution(dartResult) {
  var answer = 0;
  let temp = "";
  let keys = [];

  for (let i = 0; i < dartResult.length; i++) {
    let v = dartResult[i];

    if (v === "1" && dartResult[i + 1] === "0") {
      keys.push(10);
      continue;
    }

    if (!isNaN(Number(v))) {
      keys.push(Number(v));
      continue;
    }

    if (v === "S") {
      keys[keys.length - 1] = keys[keys.length - 1];
    }
    if (v === "D") {
      keys[keys.length - 1] = keys[keys.length - 1] * keys[keys.length - 1];
    }
    if (v === "T") {
      keys[keys.length - 1] =
        keys[keys.length - 1] * keys[keys.length - 1] * keys[keys.length - 1];
    }

    if (v === "*") {
      if (keys.length > 1) {
        keys[keys.length - 1] = keys[keys.length - 1] * 2;
        keys[keys.length - 2] = keys[keys.length - 2] * 2;
      } else {
        keys[keys.length - 1] = keys[keys.length - 1] * 2;
      }
    }

    if (v === "#") {
      keys[keys.length - 1] = keys[keys.length - 1] * -1;
    }
  }

  for (let w of keys) {
    answer += w;
  }

  return answer;
}

const dartResult = "1D2S0T";
console.log("solution(dartResult): ", solution(dartResult));
