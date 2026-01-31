const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().replace(/\r/g, "").split("\n");

const answer = [];
const cmds = input.slice(1);

const queue = [];
for (let i = 0; i < cmds.length; i++) {
  const cmdStr = cmds[i].split(" ");
  const cmd = cmdStr[0];

  if (cmd === "push") {
    queue.push(Number(cmdStr[1]));
  } else if (cmd === "pop") {
    if (queue.length === 0) answer.push(-1);
    else answer.push(queue.shift());
  } else if (cmd === "size") {
    answer.push(queue.length);
  } else if (cmd === "empty") {
    answer.push(queue.length === 0 ? 1 : 0);
  } else if (cmd === "front") {
    answer.push(queue.length !== 0 ? queue[0] : -1);
  } else if (cmd === "back") {
    answer.push(queue.length !== 0 ? queue[queue.length - 1] : -1);
  }
}
console.log(answer.join("\n"));
