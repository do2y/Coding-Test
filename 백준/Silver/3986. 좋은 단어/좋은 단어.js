const fs = require("fs");
const input = fs
  .readFileSync(0, "utf8")
  .trim()
  .split("\n");

const words = input.slice(1);
let goodWordCnt = 0;

for (let i = 0; i < words.length; i++) {
  const stack = [];

  for (let ch of words[i]) {
    if (stack[stack.length - 1] === ch) stack.pop();
    else stack.push(ch);
  }

  if (stack.length === 0) goodWordCnt++;
}

console.log(goodWordCnt);
