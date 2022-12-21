function sort(list: number[]) {
  const result = [];
  let tmp = [...list];
  for (let i = 0; i < list.length; i++) {
    const min = Math.min(...tmp);
    result.push(min);
    tmp = tmp.filter((v) => v !== min);
  }
  return result;
}

function run() {
  const list = [5, 4, 2, 3, 1];
  const result = sort(list);
  console.log(result);
}
run();
