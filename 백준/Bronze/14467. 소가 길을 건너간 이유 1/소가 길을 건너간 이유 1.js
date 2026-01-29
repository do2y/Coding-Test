const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const logs = input.slice(1);

const moveRecord = {};
let moveCount = 0;

for (let i = 0; i < N; i++) {
  const [cow, pos] = logs[i].split(" ").map(Number);

  if (moveRecord[cow] === undefined) {
    moveRecord[cow] = pos;
  } else if (moveRecord[cow] !== pos) {
    moveCount++;
    moveRecord[cow] = pos;
  }
}

console.log(moveCount);
