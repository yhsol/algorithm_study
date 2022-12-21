// prices 배열이 주어지고, prices[i]는 i번째 날 주식의 가격이다.
// 이윤을 최대화 하고 싶기 때문에, 주식을 살 날과, 판매할 다른 날을 선택해야 함.
// 최대 이윤을 리턴하라. 이윤이 없다면 0을 리턴.

// think
// 최대 이윤을 얻는다는건 무슨 말인가.
// 가장 싼 날에 사야하고, 가장 비싼 날에 판다?
// 사는 날과 파는 날의 차이가 가장 큰 경우가 주어진 배열 안에서 최대 이윤을 찾는 방법임.

// 예를 들어, 내가 첫번째 날을 확인해보자면,
// 첫번째 날을 제외한 나머지 요소 중 최대 값을 찾아야 함.
// 두번째, 세번째도 같은 식으로 진행..
// 근데 맥스 값을 계속 찾아야한단 말이지..
//=> time limit

// 왼쪽부터 돌면서 마지막 값을 제외하고 가장 작은 값.

// 저점과 현재값과의 차이.
// 앞에서부터 순회해 나가면서 저점 기록(min), 현재값과 비교(curr), 그 비교값은 max 와 비교하여 update.

// 알고리즘.
// 지나온 값들 중의 최저 값과 현재 값의 차이를 기록해가면서 그 차이가 가장 클 때의 수를 리턴.

function maxProfit(prices: number[]): number {
  let res = 0;
  let min = Infinity;

  prices.forEach((v, i) => {
    min = Math.min(min, v);
    res = Math.max(v - min, res);
  });

  return res;
}

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
