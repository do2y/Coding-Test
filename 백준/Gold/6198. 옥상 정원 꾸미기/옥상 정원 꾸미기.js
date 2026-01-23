const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n")
  .map(Number);

const n = input[0];
const buildings = input.slice(1);

let stack = [];
let total = 0n;

for (let i = 0; i < n; i++) {
  const height = buildings[i];

  while (stack.length > 0 && stack[stack.length - 1] <= height) {
    stack.pop();
  }

  total += BigInt(stack.length);

  stack.push(height);
}

console.log(total.toString());
