const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const lines = input.slice(1);

let answer = Infinity;
for (let i = 0; i <= n - 8; i++) {
  for (let j = 0; j <= m - 8; j++) {
    let countW = 0;
    let countB = 0;

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        let target = lines[i + x][j + y];

        if ((x + y) % 2 === 0) {
          if (target !== "W") countW++;
          if (target !== "B") countB++;
        } else {
          if (target === "W") countW++;
          if (target === "B") countB++;
        }
      }
    }

    answer = Math.min(answer, countW, countB);
  }
}

console.log(answer);
