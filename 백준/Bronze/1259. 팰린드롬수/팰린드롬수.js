const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll(/\r/g, "")
  .split("\n");

let answer = [];
let numberCount = input.length - 1;

for (let i = 0; i < numberCount; i++) {
  let target = input[i];

  let reversedTarget = target.split("").reverse().join("");
  if (target === reversedTarget) answer.push("yes");
  else answer.push("no");
}

console.log(answer.join("\n"));