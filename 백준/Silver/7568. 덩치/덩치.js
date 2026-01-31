const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().replace(/\r/g, "").split("\n");

const N = Number(input[0]);
const rawInput = input.slice(1);

const peopleData = [];
for (const person of rawInput) {
  peopleData.push(person.split(" ").map(Number));
}

const rankArr = [];
for (let i = 0; i < N; i++) {
  let rank = 1;
  const [weightI, heightI] = peopleData[i];

  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    const [weightJ, heightJ] = peopleData[j];

    if (weightJ > weightI && heightJ > heightI) {
      rank++;
    }
  }
  rankArr.push(rank);
}

console.log(rankArr.join(" "));
