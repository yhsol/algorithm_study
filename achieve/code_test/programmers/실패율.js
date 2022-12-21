function solution(N = 1, stages = []) {
  var answer = [];
  let dict = { stage: 0, rate: 0 };

  // 단계별 참가자 카운트
  // 1단계 8명, 2단계 7명, 3단계 4명, 4단계 2명, 5단계 1명
  for (let i = 1; i < N + 1; i++) {
    dict["stage"] = i;
    let 참여 = stages.filter((stage) => stage >= i).length;
    let 실패 = stages.filter((stage) => stage === i).length;
    dict["rate"] = 실패 / 참여;
    answer.push(dict);
    dict = {};
  }

  return answer.sort((a, b) => b.rate - a.rate).map((item) => item.stage);
}
