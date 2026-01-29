const fs = require("fs");
const word = fs.readFileSync(0, "utf8").trim();

const answer = [];

for (let i = 0; i < 26; i++) {
  const char = String.fromCharCode(97 + i);
  answer.push(word.indexOf(char));
}

console.log(answer.join(" "));
