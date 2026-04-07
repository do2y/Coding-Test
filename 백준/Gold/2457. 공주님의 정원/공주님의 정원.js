const fs = require("fs");
const input = fs
  .readFileSync(0, "utf8")
  .trim()
  .replaceAll(/\r/g, "")
  .split("\n");

const rawData = input.slice(1);
const flowers = [];
for (let i = 0; i < rawData.length; i++) {
  const [startMonth, startDate, endMonth, endDate] = rawData[i].split(" ");

  flowers.push([
    startMonth.padStart(2, "0") + startDate.padStart(2, "0"),
    endMonth.padStart(2, "0") + endDate.padStart(2, "0"),
  ]);
}

flowers.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  return b[1] - a[1];
});

let endFlag = 0;
current = "0301";
count = 0;
idx = 0;

while (current <= "1130") {
  maxEnd = current;

  while (idx < flowers.length && flowers[idx][0] <= current) {
    maxEnd = Math.max(maxEnd, flowers[idx][1]);
    idx++;
  }

  if (maxEnd === current) {
    endFlag = 1;
    break;
  }

  current = maxEnd;
  count++;
}

console.log(endFlag ? 0 : count);
