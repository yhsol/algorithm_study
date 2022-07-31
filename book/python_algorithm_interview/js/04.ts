function solution(paragraph: string, banned: string[]) {
  //   let cleaned = paragraph
  //     .split(" ")
  //     .map((item) => item.replace(/[^\w]/, ""))
  //     .join(" ")
  //     .toLowerCase();

  let cleaned = "";

  for (let w of paragraph) {
    cleaned += w.replace(/[^\w]/, " ").toLowerCase();
  }

  let count = {};
  let max = { key: "", value: 0 };

  for (let w of cleaned.split(" ").filter((item) => !banned.includes(item))) {
    if (!w || w in banned) continue;

    if (w in count) {
      count[w] += 1;
    } else {
      count[w] = 1;
    }
  }
  console.log("count: ", count);
  for (let c in count) {
    if (count[c] > max.value) {
      console.log("here: ", c, count[c]);
      max = { key: c, value: count[c] };
    }
  }

  return max.key;
}

console.log(solution("Bob. hIt, baLl", ["bob", "hit"]));
