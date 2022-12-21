let N = 10;

function fibo(n: number): number {
  if (n <= 1) {
    return n;
  }

  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(N));
