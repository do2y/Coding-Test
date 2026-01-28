const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const T = Number(input[0]);
const tc = input.slice(1);

let answer = [];

let idx = 0;
for (let i = 0; i < T; i++) {
  const [N, M] = tc[idx++].split(" ").map(Number);
  const priorities = tc[idx++].split(" ").map(Number);

  let queue = [];
  for (let j = 0; j < N; j++) {
    queue.push({ idx: j, priority: priorities[j] });
  }

  let priorityList = priorities.sort((a, b) => b - a);

  let cnt = 0;
  while (true) {
    const front = queue.shift();
    if (front.priority === priorityList[0]) {
      cnt++;
      priorityList.shift();

      if (front.idx === M) break;
    } else queue.push(front);
  }

  answer.push(cnt);
}

console.log(answer.join("\n"));
