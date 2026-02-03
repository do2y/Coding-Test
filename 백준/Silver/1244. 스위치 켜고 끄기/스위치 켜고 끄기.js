const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const switchCnt = Number(input[0]);
const switches = input[1].split(" ").map(Number);
const studentCnt = Number(input[2]);
const rawData = input.slice(3);

for (let i = 0; i < studentCnt; i++) {
  const [sex, switchNum] = rawData[i].split(" ").map(Number);
  const center = switchNum - 1;

  if (sex === 1) {
    for (let j = center; j < switchCnt; j += switchNum) {
      switches[j] = switches[j] ? 0 : 1;
    }
  } else {
    let idx = 0;
    while (
      center - (idx + 1) >= 0 &&
      center + (idx + 1) < switchCnt &&
      switches[center - (idx + 1)] === switches[center + (idx + 1)]
    ) {
      idx++;
    }
    for (let j = center - idx; j <= center + idx; j++) {
      switches[j] = switches[j] ? 0 : 1;
    }
  }
}

for (let i = 0; i < switchCnt; i++) {
  process.stdout.write(switches[i] + " ");
  if ((i + 1) % 20 === 0) {
    console.log();
  }
}
