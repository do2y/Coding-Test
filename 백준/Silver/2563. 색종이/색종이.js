const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const colorPapers = input.slice(1).map((line) => line.split(" ").map(Number));

const SIZE = 100;
const paper = new Array(SIZE).fill(0).map(() => new Array(SIZE).fill(0));

for (const coords of colorPapers) {
  const [x, y] = coords;
  attachPaper(x, y);
}

let area = 0;
for (let i = 0; i < SIZE; i++) {
  for (let j = 0; j < SIZE; j++) {
    if (paper[i][j] === 1) area++;
  }
}
console.log(area);

function attachPaper(x, y) {
  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      paper[i][j] = 1;
    }
  }
}
