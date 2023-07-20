const algo = (temperatures: number[]) => {
  const stack: number[] = [];
  const res: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[i] < temperatures[j]) {
        res.push(j - i);
        break;
      }
    }

    if (res.length === i) {
      res.push(0);
    }
  }

  return res;
};

console.log("algo: ", algo([73, 74, 75, 71, 69, 72, 76, 73]));
// answer
// [1, 1, 4, 2, 1, 1, 0, 0]
