function group(strs: string[]): Array<Array<string>> {
  let anagram = {};

  for (let word of strs) {
    const key = word.split("").sort().join("");
    anagram[key] = [...(anagram[key] || []), word];
  }

  return Object.values(anagram);
}

console.log(group(["eat", "tea", "tan", "ate", "nat", "bat"]));
