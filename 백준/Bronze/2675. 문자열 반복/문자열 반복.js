const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const T = Number(input[0]);
const answer = [];

for (let i = 1; i <= T; i++) {
  const [timesStr, word] = input[i].split(" ");
  const times = Number(timesStr);

  let converted = "";
  for (const ch of word) {
    converted += ch.repeat(times);
  }
  answer.push(converted);
}

console.log(answer.join("\n"));
