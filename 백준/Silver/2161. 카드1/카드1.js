const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const cardCount = Number(input);

const cardsArr = Array.from({ length: cardCount }, (v, i) => i + 1);

const answer = [];
while (cardsArr.length > 1) {
  let removedCard = cardsArr.shift();
  answer.push(removedCard);

  cardsArr.push(cardsArr.shift());
}

answer.push(cardsArr[0]);
console.log(answer.join(" "));
