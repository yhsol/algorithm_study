// 원래 이용료는 price
// 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return
// 금액이 부족하지 않으면 0을 return

function solution(price, money, count) {
  var answer = 0;
  let pay = 0;

  for (let i = 1; i < count + 1; i++) {
    pay += price * i;
  }

  if (pay > money) return pay - money;
  return answer;
}

console.log("solution(3, 20, 4): ", solution(3, 20, 4));
//=> 10
