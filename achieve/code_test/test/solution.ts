const solution = (data: number[]) => {
  let result = 0;
  let sorted = data.sort();

  for (let i = 0; i < sorted.length; i += 2) {
    result += sorted[i];
  }

  return result;
};

console.log("solution: ", solution([1, 4, 3, 2]));
