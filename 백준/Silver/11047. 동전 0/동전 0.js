const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let [N, money] = input[0].split(" ");
const coins = input.slice(1).map(Number);

coins.sort((a, b) => b - a);

let totalCnt = 0;
for (let i = 0; i < N; i++) {
  const coin = coins[i];
  if (coin <= money) {
    let coinCnt = Math.floor(money / coin);
    totalCnt += coinCnt;

    money -= coin * coinCnt;
  }
}

console.log(totalCnt);
