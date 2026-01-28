const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const T = Number(input[0]);
const testCases = input.slice(1);

const answer = [];
for (let i = 0; i < T; i++) {
  let [times, str] = testCases[i].split(" ");

  str = str.split("").map((char) => char.repeat(times));
  answer.push(str.join(""));
}

console.log(answer.join("\n"));
