const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

let pipeCount = 0;
let pieceCount = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === "(" && input[i + 1] === ")") {
    pieceCount += pipeCount;
    i++;
  } else if (input[i] === "(" && input[i + 1] !== ")") pipeCount++;
  else if (input[i] === ")") {
    pipeCount--;
    pieceCount++;
  }
}

console.log(pieceCount);
