const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

const testCaseCount = input[0];
const testCases = input.slice(1);
let answer = [];

for (let i = 0; i < testCaseCount; i++) {
  const cmd = testCases[3 * i];
  let str = testCases[3 * i + 2];
  const arr = str.length === 2 ? [] : str.slice(1, -1).split(",").map(Number);

  let flag = 0;
  let isReverse = 0;

  let head = 0;
  let tail = arr.length - 1;

  for (let i = 0; i < cmd.length; i++) {
    if (cmd[i] === "R") {
      isReverse = !isReverse;
    } else {
      if (head > tail) {
        answer.push("error");
        flag = 1;
        break;
      }
      isReverse ? tail-- : head++;
    }
  }

  if (!flag) {
    let slicedArr = arr.slice(head, tail + 1);
    if (isReverse) slicedArr.reverse();
    answer.push("[" + slicedArr.join(",") + "]");
  }
}

console.log(answer.join("\n"));
