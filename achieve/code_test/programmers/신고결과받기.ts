// 각 유저는 한 번에 한 명의 유저를 신고
// 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
// 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.

// k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
// 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.

// 이용자의 ID가 담긴 문자열 배열 id_list
// 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report
// 정지 기준이 되는 신고 횟수 k

// 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return

function solution(id_list: string[], report: string[], k: number) {
  let result: number[] = [];
  let reportDict = {};
  let reportedDict = {};
  let fired: string[] = [];

  // reportDict 기본값 생성
  for (const user of id_list) {
    reportDict[user] = [];
  }

  // reportDict, reportedDict 채워넣기
  for (const reportInfo of report) {
    const formatted = reportInfo.split(" ");

    if (!reportDict[formatted[0]].includes(formatted[1])) {
      reportDict[formatted[0]] = [...reportDict[formatted[0]], formatted[1]];
      reportedDict[formatted[1]] = reportedDict[formatted[1]]
        ? reportedDict[formatted[1]] + 1
        : 1;
    }
  }

  // reportedDict 에서 k 이상인거 추려서 fired 에 추가
  for (const a in reportedDict) {
    if (reportedDict[a] >= k) {
      fired.push(a);
    }
  }

  for (const a in reportDict) {
    let count = 0;
    for (const b of reportDict[a]) {
      if (fired.includes(b)) {
        count += 1;
      }
    }
    result.push(count);
  }

  return result;
}

// console.log(
//   solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
// );

function solutionTheOthers(id_list: string[], report: string[], k: number) {
  let set = new Set(report);
  let reports = [...set].map((a) => a.split(" "));
  console.log("reports: ", reports);

  let counts = new Map();

  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  console.log("counts: ", counts);

  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0] + 1 || 1));
    }
  }

  console.log("good: ", good);

  let answer = id_list.map((a) => good.get(a) || 0);
  console.log("answer: ", answer);

  return answer;
}

solutionTheOthers(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);

// Map 을 이렇게 쓸 수 있구만
// reports:  [
//     [ "muzi", "frodo" ],
//     [ "apeach", "frodo" ],
//     [ "frodo", "neo" ],
//     [ "muzi", "neo" ],
//     [ "apeach", "muzi" ]
//   ]
//   counts:  Map { "frodo" => 2, "neo" => 2, "muzi" => 1 }
//   good:  Map { "muzi" => undefined, "apeach" => undefined, "frodo" => undefined }
//   answer:  [ 0, 0, 0, 0 ]
