function factorial(n: number) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result = result * i;
  }
  return result;
}

function recursive_factorial(n: number): number {
  if (n <= 1) {
    return 1;
  }

  return n * recursive_factorial(n - 1);
}

console.log(recursive_factorial(10));
// 재귀는 아직 헷갈린다!!!
