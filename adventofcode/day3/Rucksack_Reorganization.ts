import * as fs from "fs";
import * as readlines from "readline";

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.
// copilot 이 만든 코드
const getPriority = (item: string) => {
  const code = item.charCodeAt(0);
  if (code >= 97 && code <= 122) {
    return code - 96;
  }
  if (code >= 65 && code <= 90) {
    return code - 38;
  }
  return 0;
};

const readLines = async (filePath: string) => {
  const lines: string[] = [];

  return new Promise((resolve, reject) => {
    const rl = readlines.createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity,
    });

    rl.on("line", (line) => {
      lines.push(line);
    });

    rl.on("close", () => {
      resolve(lines);
    });
  });
};

const rucksackReorganizationPart1 = async () => {
  let res = 0;

  try {
    const lines = (await readLines("./puzzle_input.txt")) as string[];
    const storage = new Map();

    lines.forEach((line, i) => {
      const lastIndex = line.length - 1;
      const center = Math.floor(lastIndex / 2);
      const [a, b] = [line.slice(0, center), line.slice(center, lastIndex)];
      let visited = new Set();
      for (const c of b) {
        if (a.includes(c) && !visited.has(c)) {
          visited.add(c);
          const count = storage.get(c) || 0;
          const priority = getPriority(c); // 스펠링 별 점수 계산
          storage.set(c, count + priority);
        }
      }
    });

    storage.forEach((value) => {
      res += value;
    });
  } catch (error) {
    console.error(error);
  }

  return res;
};

const rucksackReorganizationPart2 = async () => {
  let res = 0;
  const lines = (await readLines("./puzzle_input.txt")) as string[];

  // groups 에 three 별로 객체로 묶어서 넣기
  let groups: string[][] = [];
  let temp: string[] = [];
  for (let [i, v] of lines.entries()) {
    temp.push(v);
    if (i !== 0 && (i + 1) % 3 === 0) {
      groups.push(temp);
      temp = [];
    }
  }

  for (let group of groups) {
    const [a, b, c] = group;

    for (let t of a) {
      if (b.includes(t) && c.includes(t)) {
        res += getPriority(t);
        break;
      }
    }
  }

  return res;
};

(async () => {
  const res = await rucksackReorganizationPart2();
  console.log("res: ", res);
})();
