const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = "";
const ascendingStr = [...input].sort((a, b) => a - b).join("");
const descendingStr = [...input].sort((a, b) => b - a).join("");
const inputStr = input.join("");

if (inputStr === ascendingStr) answer = "ascending";
else if (inputStr === descendingStr) answer = "descending";
else answer = "mixed";

console.log(answer);
