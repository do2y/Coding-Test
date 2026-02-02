const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

let num = Number(input);

let answer = 1;
for (let i = 1; i <= num; i++) {
  answer *= i;
}

console.log(answer);
