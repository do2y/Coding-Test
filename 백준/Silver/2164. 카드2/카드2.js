const fs = require("fs");
const N = +fs.readFileSync(0, "utf8").trim();

const cards = Array.from({ length: N }, (_, i) => i + 1);

let front = 0;
while (cards.length - front > 1) {
  front++;
  cards.push(cards[front++]);
}

console.log(cards[front]);
