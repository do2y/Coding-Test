const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let n = parseInt(input[0]);
let stack = [];
let result = [];

for (let i = 1; i <= n; i++) {
  let line = input[i];
  isValid = true;
  stack = [];

  for (let j = 0; j < line.length; j++) {
    if (line[j] === "(") stack.push(line[j]);
    else if (line[j] === ")") {
      if (stack.length === 0 && stack[stack.length - 1] !== "(") {
        isValid = false;
        break;
      }
      stack.pop();
    }
  }
  if (isValid && stack.length === 0) result.push("YES");
  else result.push("NO");
}

console.log(result.join("\n"));
