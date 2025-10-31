const fs = require("fs");
const [n, m] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer;

if (n > m) answer = ">";
else if (n < m) answer = "<";
else answer = "==";

console.log(answer);
