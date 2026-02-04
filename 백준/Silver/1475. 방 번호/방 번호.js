const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const nums = input.split("").map(Number);

const cntDict = {};
for (const num of nums) {
  cntDict[num] = (cntDict[num] || 0) + 1;
}
const sixNine = Math.ceil(((cntDict[6] || 0) + (cntDict[9] || 0)) / 2);

let maxOther = 0;
for (let d = 0; d <= 9; d++) {
  if (d === 6 || d === 9) continue;
  maxOther = Math.max(maxOther, cntDict[d] || 0);
}

const answer = Math.max(sixNine, maxOther);
console.log(answer);
