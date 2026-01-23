const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const testCaseCount = input[0];
const testCases = input.slice(1);
let answer = [];

for (let i = 0; i < testCaseCount; i++) {
  const cmd = testCases[3 * i];
  const cnt = testCases[3 * i + 1];
  let str = testCases[3 * i + 2];
  const arr = str.length === 2 ? [] : str.slice(1, -1).split(",").map(Number);

  let flag = 0;
  let reverse = 0;
  for (let i = 0; i < cmd.length; i++) {
    if (cmd[i] === "R") {
      reverse = !reverse;
    } else {
      if (arr.length >= 1) reverse ? arr.pop() : arr.shift();
      else {
        answer.push("error");
        flag = 1;
        break;
      }
    }
  }
  if (!flag) {
    if (reverse) arr.reverse();
    answer.push("[" + arr.toString() + "]");
  }
}

console.log(answer.join("\n"));
