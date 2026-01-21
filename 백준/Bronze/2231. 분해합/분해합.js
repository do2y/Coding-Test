const fs = require("fs");
const target = Number(
  fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
    .toString()
    .trim(),
);

let answer = 0;

for (let i = 1; i < target; i++) {
  const sum =
    i +
    i
      .toString()
      .split("")
      .reduce((a, c) => a + Number(c), 0);

  if (sum === target) {
    answer = i;
    break;
  }
}

console.log(answer);
