const { reverse } = require("dns");
const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let n = input[0];
let towers = input[1].split(" ").map(Number);

let answer = [];
let stack = [];

for (let i = 0; i < n; i++) {
  const height = towers[i];

  while (stack.length > 0 && stack[stack.length - 1].height < height) {
    stack.pop();
  }

  if (stack.length === 0) answer.push(0);
  else answer.push(stack[stack.length - 1].index);

  stack.push({ height, index: i + 1 });
}

console.log(answer.join(" "));
