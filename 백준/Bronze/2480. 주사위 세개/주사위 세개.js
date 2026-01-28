const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const dices = input
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

const check = [];
let prize = 0;
let sameDice = 0;

for (let i = 0; i < 3; i++) {
  if (!check.includes(dices[i])) check.push(dices[i]);
  else sameDice = dices[i];
}

if (check.length === 1) {
  prize = 10000 + sameDice * 1000;
} else if (check.length === 2) {
  prize = 1000 + sameDice * 100;
} else prize = 100 * check[0];

console.log(prize);
