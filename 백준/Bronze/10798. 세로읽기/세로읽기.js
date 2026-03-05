const fs = require("fs");
const input = fs
  .readFileSync(0, "utf8")
  .trim()
  .replaceAll(/\r/g, "")
  .split("\n");

const lengthArr = input.map((word) => word.length);
const maxlen = Math.max(...lengthArr);

let answer = "";

for (let i = 0; i < maxlen; i++) {
  for (let j = 0; j < input.length; j++) {
    if (i >= input[j].length) continue;
    answer += input[j][i];
  }
}

console.log(answer);
