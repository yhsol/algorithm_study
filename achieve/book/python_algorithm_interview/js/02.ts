export function solution(params: string[]): string[] {
  //   return params.reverse();
  let left = 0;
  let right = params.length - 1;

  while (left < right) {
    [[params[left], params[right]]] = [[params[right], params[left]]];
    left += 1;
    right -= 1;
  }

  return params;
}

console.log(solution("hello".split("")));
