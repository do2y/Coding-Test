const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n").map(BigInt);

const answer = [];
let idx = 0;

for (let i = 0; i < 3; i++) {
  const N = Number(input[idx++]);

  let sum = 0n;
  for (let j = 0; j < N; j++) {
    sum += input[idx++];
  }

  answer.push(sum > 0n ? "+" : sum < 0n ? "-" : "0");
}

console.log(answer.join("\n"));
