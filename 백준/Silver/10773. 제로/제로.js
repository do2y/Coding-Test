const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let n = input[0];
let arr = input.slice(1);
let stack = [];

for (let i = 0; i < n; i++) {
  let number = Number(arr[i]);
  if (number === 0) stack.pop();
  else stack.push(number);
}

let answer = stack.reduce((a, c) => a + c, 0);
console.log(answer);
