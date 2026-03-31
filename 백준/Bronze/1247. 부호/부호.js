const fs = require("fs");
const input = fs
  .readFileSync(0, "utf8")
  .trim()
  .replaceAll(/\r/g, "")
  .split("\n")
  .map(BigInt);

const answer = [];
let idx = 0;
for (let i = 0; i < 3; i++) {
  let N = Number(input[idx++]);

  let numbers = input.slice(idx, idx + N);
  idx += N;

  let result = numbers.reduce((a, c) => a + c, 0n);

  if (result > 0) answer.push("+");
  else if (result < 0) answer.push("-");
  else answer.push("0");
}

console.log(answer.join("\n"));
