// leetcode: 937

function solution(params: string[]): string[] {
  let str: string[] = [];
  let int: string[] = [];

  for (const a of params) {
    if (!isNaN(Number(a.split(" ").splice(1).join("")))) {
      int.push(a);
    } else {
      str.push(a);
    }
  }

  str.sort((a, b) => {
    if (a.split(" ").splice(1).join(" ") < b.split(" ").splice(1).join(" ")) {
      return -1;
    } else if (
      a.split(" ").splice(1).join(" ") > b.split(" ").splice(1).join(" ")
    ) {
      return 1;
    } else {
      return 0;
    }
  });

  return [...str, ...int];
}

console.log(
  solution([
    "dig1 8 1 5 1",
    "let1 art can",
    "dig2 3 6",
    "let2 own kit dig",
    "let3 art zero",
  ])
);
