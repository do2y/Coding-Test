const fs = require("fs");
const [A, B, N] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let num = A % B;
let result = 0;

for (let i = 0; i < N; i++) {
  num *= 10;
  result = Math.floor(num / B);
  num %= B;
}

console.log(result);
