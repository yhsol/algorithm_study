import * as fs from "fs";
import * as readline from "readline";

const readLines = async (filePath: string) => {
  const lines: string[] = [];

  return new Promise((resolve) => {
    const rl = readline.createInterface({
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

const campCleanup = async () => {
  let countOfPair = 0;

  try {
    const lines = (await readLines("./puzzle-input.txt")) as string[];

    lines.forEach((line) => {
      const splitted = line.split(/[-,]\s*/);
      const a = Number(splitted[0]);
      const b = Number(splitted[1]);
      const c = Number(splitted[2]);
      const d = Number(splitted[3]);

      const leftIsBigger = a <= c && b >= d;
      const rightIsBigger = a >= c && b <= d;
      const fullyContained = leftIsBigger && rightIsBigger;

      if (fullyContained) {
        countOfPair += 1;
      }
    });
    console.log("🚀 turbo : countOfPairt: ", countOfPair);
  } catch (error) {
    console.error("campCleanup: ", error);
  }

  return countOfPair;
};

const campCleanup2 = async () => {
  let countOfPair = 0;

  try {
    const lines = (await readLines("./puzzle-input.txt")) as string[];

    lines.forEach((line) => {
      const splitted = line.split(/[-,]\s*/);
      const a = Number(splitted[0]);
      const b = Number(splitted[1]);
      const c = Number(splitted[2]);
      const d = Number(splitted[3]);

      const dup = () => {
        // (a <= c && b >= a) || (b >= d && a <= c);

        if (a >= c && a <= d) return true;
        if (b >= c && b <= d) return true;
        if (c >= a && c <= b) return true;
        if (d >= a && d <= b) return true;

        return false;
      };

      // chatGPT 가 준 overlap 함수..ㅎ
      function overlap(
        pair1: [number, number],
        pair2: [number, number]
      ): boolean {
        const [start1, end1] = pair1;
        const [start2, end2] = pair2;
        return end1 >= start2 && end2 >= start1;
      }

      if (overlap([a, b], [c, d])) {
        countOfPair += 1;
      }
    });
    console.log("🚀 turbo : countOfPairt: ", countOfPair);
  } catch (error) {
    console.error("campCleanup: ", error);
  }

  return countOfPair;
};

campCleanup2();
