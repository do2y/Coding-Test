const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = input[0];
const arr = input[1].split("").map(Number);

const answer = arr.reduce((a, c) => a + c, 0);
console.log(answer);
