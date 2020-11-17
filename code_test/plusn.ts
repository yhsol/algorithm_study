function plusn(n: number) {
  let result = 0;
  for (let i = 1; i < n + 1; i++) {
    result += i;
  }

  return result;
}

function plusn2(n: number) {
  return (n * (n + 1)) / 2;
}

console.log(plusn2(10));
