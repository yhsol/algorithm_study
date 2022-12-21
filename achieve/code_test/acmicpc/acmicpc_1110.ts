let data: any = "26";
let key: any = data;
let count: any = 0;
let int_sum: any = 0;

if (parseInt(key) < 10) {
  key = "0" + key;
}

while (true) {
  //   console.log("key: ", key, typeof key);
  int_sum = parseInt(key[0]) + parseInt(key[1]);
  int_sum = String(int_sum);
  if (parseInt(int_sum) < 10) {
    int_sum = "0" + int_sum;
  }
  //   console.log("int_sum: ", int_sum, typeof int_sum);

  key = key[1] + int_sum[1];
  count++;
  if (parseInt(data) === parseInt(key)) {
    break;
  }
}

console.log(count);
