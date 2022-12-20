// The first column: A for Rock, B for Paper, and C for Scissors
// The second column--
// The second column, you reason, must be what you should play in response: X for Rock, Y for Paper, and Z for Scissors
// 1 for Rock, 2 for Paper, and 3 for Scissors + 0 if you lost, 3 if the round was a draw, and 6 if you won)

// 1. 일단 퍼즐 인풋을 읽어내야 함. 1 컬럼, 2 컬럼 분리해서. => 파일을 라인 단위로 읽고, 빈칸을 기준으로 구분.
// 2. 인풋을 순회하면서 계산 진행. => 이겼는지 졌는지. 내 모양은 무엇이었는지.
// 3. 계산에 필요한 알고리즘. 가위바위보 알고리즘을 만들어야 함.
// 4. 인풋 데이터를 어떤 구조에 담아둘까.

import * as fs from "fs";
import * as readline from "readline";

/** rock, paper, scissors */
type Opponent = "A" | "B" | "C";
/** rock, paper, scissors */
type Me = "X" | "Y" | "Z";

const readLines = async (filePath: string) => {
  const lines: string[] = [];

  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity,
    });

    rl.on("line", (line) => {
      lines.push(line);
    });

    // close 될 때 resolve 를 해주면 됨.
    rl.on("close", () => {
      resolve(lines);
    });
  });
};

const 승부결과 = (a: Opponent, b: Me) => {
  const lost = 0;
  const draw = 3;
  const win = 6;

  if (a === "A") {
    if (b === "X") return draw;
    if (b === "Y") return win;
    if (b === "Z") return lost;
  }

  if (a === "B") {
    if (b === "X") return lost;
    if (b === "Y") return draw;
    if (b === "Z") return win;
  }

  if (a === "C") {
    if (b === "X") return win;
    if (b === "Y") return lost;
    if (b === "Z") return draw;
  }

  return 0;
};

const 모양에따른점수 = (a: Me) => {
  if (a === "X") return 1;
  if (a === "Y") return 2;
  if (a === "Z") return 3;

  return 0;
};

const rockPaperScissors = async () => {
  let res = 0;
  try {
    const lines = (await readLines("./puzzle-input.txt")) as string[];

    lines.forEach((line) => {
      const opponent = line.split(" ")[0];
      const me = line.split(" ")[1];
      const 경기점수 = 승부결과(opponent as Opponent, me as Me);
      const 모양점수 = 모양에따른점수(me as Me);

      res += 경기점수 + 모양점수;
    });
  } catch (error) {
    console.error("error", error);
  }

  return res;
};

(async () => {
  const res = await rockPaperScissors();
  console.log("🚀 turbo : res", res);
})();
