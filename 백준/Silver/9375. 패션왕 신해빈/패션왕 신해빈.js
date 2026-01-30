const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().replace(/\r/g, "").split("\n");

const T = Number(input[0]);
const testCases = input.slice(1);

const answer = [];

let idx = 0;
for (let i = 0; i < T; i++) {
  let itemCount = Number(testCases[idx++]);
  const items = testCases.slice(idx, idx + itemCount);
  idx += itemCount;

  const count = {};
  for (const item of items) {
    const [cloth, category] = item.split(" ");
    count[category] = (count[category] || 0) + 1;
  }

  let result = 1;
  for (const cnt of Object.values(count)) {
    result *= cnt + 1;
  }

  answer.push(result - 1);
}

console.log(answer.join("\n"));
