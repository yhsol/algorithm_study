function solution(s: string) {
  // let filtered = s.split('').filter(item => /^[a-zA-Z0-9]+$/.test(item)).map(item => item.toLowerCase())

  let filtered = s
    .split("")
    .filter((item) => /^[a-z0-9]+$/i.test(item))
    .map((item) => item.toLowerCase());

  // console.log('origin: ', filtered.join(''))
  // console.log('reversed: ', filtered.reverse().join(''))
  // while (filtered.length > 1) {
  //   const front = filtered.shift()
  //   const rear = filtered.pop();
  //   console.log('here: ',front, rear)
  //   if (front !== rear) {
  //     return false
  //   }
  // }
  // return true
  return filtered.join("") === filtered.reverse().join("");
}

console.log(solution("A man, a plan, a canal: Panama"));

export {};
