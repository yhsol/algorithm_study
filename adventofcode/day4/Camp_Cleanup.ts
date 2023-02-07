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
      const [a, b, c, d] = splitted;

      const leftIsBigger = Number(a) <= Number(c) && Number(b) >= Number(d);
      const rightIsBigger = Number(a) >= Number(c) && Number(b) <= Number(d);
      if (leftIsBigger || rightIsBigger) {
        countOfPair += 1;
      }
    });
    console.log("🚀 turbo : countOfPairt: ", countOfPair);
  } catch (error) {
    console.error("campCleanup: ", error);
  }

  return countOfPair;
};

campCleanup();
