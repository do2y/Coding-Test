const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

const word = input;
let alphabetCount = {};

for (let i = 0; i < word.length; i++) {
  alphabet = word[i].toUpperCase();

  if (!alphabetCount[alphabet]) alphabetCount[alphabet] = 0;

  alphabetCount[alphabet]++;
}

const maxValue = Math.max(...Object.values(alphabetCount));
const count = Object.values(alphabetCount).filter((v) => v === maxValue).length;

if (count === 1) {
  const maxFrequencyChar = Object.keys(alphabetCount).find(
    (k) => alphabetCount[k] === maxValue
  );
  console.log(maxFrequencyChar);
} else console.log("?");
