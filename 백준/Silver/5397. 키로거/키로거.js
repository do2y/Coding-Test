const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const T = +input[0];
const tc = input.slice(1);

const answer = [];
for (let i = 0; i < T; i++) {
  let pw = tc[i];

  let left = [];
  let right = [];

  for (let i = 0; i < pw.length; i++) {
    let ch = pw[i];

    if (ch === "<") {
      if (left.length > 0) right.push(left.pop());
    } else if (ch === ">") {
      if (right.length > 0) left.push(right.pop());
    } else if (ch === "-") {
      if (left.length > 0) left.pop();
    } else {
      left.push(ch);
    }
  }
  answer.push(left.join("") + right.reverse().join(""));
}

console.log(answer.join("\n"));
