const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const N = +input;

let fiveCnt = Math.floor(N / 5);
let res = N % 5;

while (fiveCnt > 0 && res % 3 !== 0) {
  fiveCnt--;
  res = N - fiveCnt * 5;
}

if (res % 3 !== 0) {
  console.log(-1);
  return;
}

let threeCnt = res / 3;
console.log(fiveCnt + threeCnt);
