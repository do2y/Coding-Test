const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const meetings = input.slice(1);

const meetingsArr = [];
for (let i = 0; i < N; i++) {
  const meeting = meetings[i].split(" ").map(Number);
  meetingsArr.push(meeting);
}
meetingsArr.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  return a[0] - b[0];
});

let count = 1;
let endTime = meetingsArr[0][1];
for (let i = 1; i < N; i++) {
  const m = meetingsArr[i];
  if (endTime <= m[0]) {
    count++;
    endTime = m[1];
  }
}

console.log(count);
