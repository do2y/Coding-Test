const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
const testCases = input.slice(1);
let answer = [];

let idx = 0;
for (let i = 0; i < T; i++) {
  const [N, M] = testCases[idx++].split(" ").map(Number);
  const priorities = testCases[idx++].split(" ").map(Number);

  let queue = [];
  for (let j = 0; j < N; j++) {
    queue.push({ idx: j, priority: priorities[j] });
  }

  const priorityList = priorities.sort((a, b) => b - a);
  let cnt = 0;
  while (true) {
    const first = queue.shift();

    if (first.priority === priorityList[0]) {
      cnt++;
      priorityList.shift();

      if (first.idx === M) {
        answer.push(cnt);
        break;
      }
    } else queue.push(first);
  }
}

console.log(answer.join("\n"));
