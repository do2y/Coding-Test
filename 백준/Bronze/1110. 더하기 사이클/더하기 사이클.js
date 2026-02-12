const fs = require("fs");
let input = fs.readFileSync(0, "utf8").trim();

let num = Number(input);
let original = num;
let cnt = 0;

while (true) {
  cnt++;
  let tens = Math.floor(num / 10);
  let ones = num % 10;
  let sum = tens + ones;
  num = ones * 10 + (sum % 10);

  if (num === original) break;
}

console.log(cnt);
