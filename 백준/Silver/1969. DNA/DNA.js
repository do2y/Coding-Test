const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const dna = input.slice(1);

let answer = "";
let hammingDistance = 0;

for (let i = 0; i < M; i++) {
  const cntDict = {};
  for (let j = 0; j < N; j++) {
    let alphabet = dna[j][i];
    cntDict[alphabet] = (cntDict[alphabet] || 0) + 1;
  }

  const sorted = Object.entries(cntDict).sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    }
    return a[0].localeCompare(b[0]);
  });

  const selected = sorted[0][0];
  answer += selected;

  for (let k = 0; k < N; k++) {
    if (dna[k][i] !== selected) hammingDistance++;
  }
}

console.log(answer);
console.log(hammingDistance);
