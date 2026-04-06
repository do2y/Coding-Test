const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const numbers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const n = +input[2];

if (numbers.includes(n)) {
  console.log(0);
  return;
}

let start;
let end;
if (n < numbers[0]) {
  start = 1;
  end = numbers[0] - 1;
} else {
  let idx = 0;
  while (numbers[idx] < n) {
    idx++;
  }
  start = numbers[idx - 1] + 1;
  end = numbers[idx] - 1;
}

let answer = (n - start + 1) * (end - n + 1) - 1;

console.log(answer);
