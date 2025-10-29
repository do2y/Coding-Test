const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let diceMap = {};

input.forEach((num) => {
  diceMap[num] = (diceMap[num] || 0) + 1;
});

let sameDice = Number(Object.keys(diceMap).find((k) => diceMap[k] >= 2));
const values = Object.values(diceMap);
let prize = 0;

if (values.includes(2)) prize = 1000 + sameDice * 100;
else if (values.includes(3)) prize = 10000 + sameDice * 1000;
else prize = Math.max(...input) * 100;

console.log(prize);
