const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .toUpperCase();

const alphabetCount = {};

for (const char of input) {
  alphabetCount[char] = (alphabetCount[char] || 0) + 1;
}

const maxValue = Math.max(...Object.values(alphabetCount));
const maxKeys = Object.keys(alphabetCount).filter(
  (key) => alphabetCount[key] === maxValue
);

console.log(maxKeys.length === 1 ? maxKeys[0] : "?");
