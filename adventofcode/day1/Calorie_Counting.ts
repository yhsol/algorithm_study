import * as fs from "fs";
import * as readline from "readline";

const maxCalrories = () => {
  let res = 0;
  let pick = 0;

  const filePath = "./puzzle-input.txt";
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  rl.on("line", (line) => {
    if (line.trim() === "") {
      res = Math.max(res, pick);
      pick = 0;
    } else {
      pick += Number(line);
    }
  });

  rl.on("close", () => {
    console.log(`Results: ${res}`);
  });

  return res;
};

const sumOfTopThreeCalrories = () => {
  let res: number[] = [];
  let pick = 0;

  const filePath = "./puzzle-input.txt";
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  rl.on("line", (line) => {
    if (line.trim() === "") {
      res.push(pick);
      pick = 0;
    } else {
      pick += Number(line);
    }
  });

  rl.on("close", () => {
    const topThrees = res.sort((a, b) => b - a).slice(0, 3);
    const sum = topThrees.reduce((acc, curr) => acc + curr);
    console.log(`Results: ${sum}`);
  });

  return res;
};

sumOfTopThreeCalrories();
