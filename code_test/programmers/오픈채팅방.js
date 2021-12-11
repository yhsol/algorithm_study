const STATUS = {
  Leave: "Leave",
  Change: "Change",
  Enter: "Enter",
};

const ACTION_BY_STATUS = {
  Leave: "님이 나갔습니다.",
  Enter: "님이 들어왔습니다.",
};

function solution(record) {
  let answer = [];
  let userDict = {};

  for (let item of record) {
    let splited = item.split(" ");
    let status = splited[0];

    if (status !== STATUS.Leave) {
      let uid = splited[1];
      let name = splited.length > 2 ? splited[2] : "";

      userDict[uid] = {
        name,
      };
    }
  }

  for (let item of record) {
    let splited = item.split(" ");
    let status = splited[0];
    let uid = splited[1];

    if (status !== STATUS.Change) {
      answer.push(`${userDict[uid].name}${ACTION_BY_STATUS[status]}`);
    }
  }

  return answer;
}

const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

console.log("solution(record): ", solution(record));
