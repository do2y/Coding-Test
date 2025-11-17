const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const brace = { ")": "(", "]": "[" };
let stack = [];
let answer = [];

for (let i = 0; i < input.length - 1; i++) {
  let sentence = input[i];
  let isBalanced = true;
  stack = [];

  for (let j = 0; j < sentence.length; j++) {
    if (sentence[j] === "(" || sentence[j] === "[") {
      stack.push(sentence[j]);
    } else if (sentence[j] === ")" || sentence[j] === "]") {
      if (stack[stack.length - 1] !== brace[sentence[j]]) {
        isBalanced = false;
        break;
      }
      stack.pop();
    }
  }
  if (isBalanced && stack.length === 0) {
    answer.push("yes");
  } else answer.push("no");
}

console.log(answer.join("\n"));
