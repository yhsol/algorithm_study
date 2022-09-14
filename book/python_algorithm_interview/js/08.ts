const solution = (data: number[]) => {
  const big = Math.max(...data);
  const pivotIndex = data.indexOf(big);
  console.log(pivotIndex);
};

console.log(solution([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

export {};
