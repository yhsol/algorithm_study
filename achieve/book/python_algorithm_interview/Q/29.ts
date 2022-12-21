function solve(j: string, s: string) {
  // j, s 를 split 하고, 각각을 obj 의 key 로 삼고 각가의 카운트를 하면 될 듯.
  let result = 0;
  let J: Record<string, number> = {};
  let S: Record<string, number> = {};
  for (let i = 0; i < j.length; i++) {
    J[j[i]] = 0;
  }
  for (let i = 0; i < s.length; i++) {
    if (!J.hasOwnProperty(s[i])) continue;
    J[s[i]] += 1;
  }
  for (let i in J) {
    result += J[i];
  }
  return result;
}

console.log(solve("aA", "aAAbbbb"));
