const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = +input[0];
const times = input[1].split(" ").map(Number);

times.sort((a, b) => a - b);

let cumulative = 0;
let total = 0;

for (let i = 0; i < N; i++) {
  cumulative += times[i];
  total += cumulative;
}

console.log(total);
