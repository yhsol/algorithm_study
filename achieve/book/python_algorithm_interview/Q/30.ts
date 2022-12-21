function solution30(data: string) {
  let result = 0;
  let text = "";

  for (let i = 0; i < data.length + 1; i++) {
    if (!data[i]) continue;
    if (!text.includes(data[i])) {
      text += data[i];
    } else {
      result = Math.max(result, text.length);
      text = data[i];
    }
  }
  return result;
}

const inputData = "dvdf";
console.log(solution30(inputData));
