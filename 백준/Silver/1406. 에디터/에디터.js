const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const str = input[0];
const cmdCnt = +input[1];
const cmds = input.slice(2);

const left = str.split("");
const right = [];

for (let i = 0; i < cmdCnt; i++) {
  let cmd = cmds[i];

  if (cmd === "L") {
    let popped = left.pop();
    if (popped) {
      right.push(popped);
    }
  } else if (cmd === "D") {
    if (right.length) {
      left.push(right.pop());
    }
  } else if (cmd === "B") {
    if (left.length) {
      left.pop();
    }
  } else {
    const [_, alpha] = cmd.split(" ");
    left.push(alpha);
  }
}

let answer = left.join("") + right.reverse().join("");
console.log(answer);
