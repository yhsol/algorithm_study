const algo = (temperatures: number[]) => {
  const stack: number[] = [];
  const res: number[] = [];

  temperatures.forEach((v, i) => {
    console.log(v, temperatures[stack.length - 1]);

    while (stack.length && v > temperatures[stack.length - 1]) {
      const last = stack.pop();
      if (last !== undefined) {
        console.log("last, i - last: ", last, i - last);
        res[last] = i - last;
      }
    }
    stack.push(i);
  });

  while (stack.length) {
    const last = stack.pop();
    if (last !== undefined) {
      res[last] = 0;
    }
  }

  return res;
};

console.log("algo: ", algo([73, 74, 75, 71, 69, 72, 76, 73]));
// answer
// [1, 1, 4, 2, 1, 1, 0, 0]
