const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

const n = Number(input[0]);
const stack = [];
let output = [];

for (let i = 1; i <= n; i++) {
  const [cmd, value] = input[i].split(" ");

  if (cmd === "push") {
    stack.push(value);
  } else if (cmd === "pop") {
    output.push(stack.length ? stack.pop() : -1);
  } else if (cmd === "size") {
    output.push(stack.length);
  } else if (cmd === "empty") {
    output.push(stack.length ? 0 : 1);
  } else if (cmd === "top") {
    output.push(stack.length ? stack[stack.length - 1] : -1);
  }
}

console.log(output.join("\n"));
