const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n")
  .map(Number);

const n = input[0];
const sequence = input.slice(1);

const stack = [];
const result = [];
let current = 1;

for (let i = 0; i < n; i++) {
  const target = sequence[i];

  while (current <= target) {
    stack.push(current++);
    result.push("+");
  }

  const popped = stack.pop();
  if (popped !== target) {
    console.log("NO");
    return;
  }

  result.push("-");
}

console.log(result.join("\n"));
