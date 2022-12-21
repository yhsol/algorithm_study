// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", function (line) {
//   console.log(line);

//   rl.close();
// }).on("close", function () {
//   process.exit();
// });

const fs = require("fs");
let input = fs.readFileSync().toString().split(" ");

let num = Number(input);

for (let i = 0; i < num; i++) {
  console.log(i);
}
