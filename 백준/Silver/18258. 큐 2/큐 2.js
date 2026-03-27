const fs = require("fs");
const input = fs
  .readFileSync(0, "utf8")
  .trim()
  .replaceAll(/\r/g, "")
  .split("\n");

const N = +input[0];
const cmds = input.slice(1);

const answer = [];

const queue = [];
let front = 0;
for (let i = 0; i < N; i++) {
  let cmd = cmds[i].split(" ");

  switch (cmd[0]) {
    case "push":
      queue.push(Number(cmd[1]));
      break;
    case "pop":
      if (front === queue.length) answer.push(-1);
      else answer.push(queue[front++]);
      break;
    case "size":
      answer.push(queue.length - front);
      break;
    case "empty":
      answer.push(front === queue.length ? 1 : 0);
      break;
    case "front":
      if (front === queue.length) answer.push(-1);
      else answer.push(queue[front]);
      break;
    case "back":
      if (front === queue.length) answer.push(-1);
      else answer.push(queue[queue.length - 1]);
      break;
  }
}

console.log(answer.join("\n"));
