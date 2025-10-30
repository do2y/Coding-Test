const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .join("");

let answer = "";
const ascendingStr = input
  .split("")
  .sort((a, b) => a - b)
  .join("");

const decendingStr = input
  .split("")
  .sort((a, b) => b - a)
  .join("");

if (input === ascendingStr) answer = "ascending";
else if (input === decendingStr) answer = "descending";
else answer = "mixed";

console.log(answer);