function solution(p: number[]) {
  console.log(p[p.length - 2]);

  // case 알 수 없음
  if (p.length <= 1) return -1;
  // case 보름달
  if (p[p.length - 1] === 15) return 0;
  // case 그믐달 or 초승달
  if (p[p.length - 1] === 0) return 1;
  // case 증감 판별
  if (p[p.length - 2] > p[p.length - 1]) return 0;
  else return 1;
}

console.log(solution([1, 2]));
