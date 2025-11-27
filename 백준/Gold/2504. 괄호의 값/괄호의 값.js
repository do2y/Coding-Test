const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

const BRACKETS = {
  ")": { open: "(", value: 2 },
  "]": { open: "[", value: 3 },
};

const stack = [];
let isInvalid = false;

for (let i = 0; i < input.length; i++) {
  const current = input[i];

  if (BRACKETS[current]) {
    let temp = 0;

    while (true) {
      if (stack.length === 0) {
        isInvalid = true;
        break;
      }

      const popped = stack.pop();

      if (popped === BRACKETS[current].open) break;

      if (typeof popped !== "number") {
        isInvalid = true;
        break;
      }

      temp += popped;
    }

    if (isInvalid) break;

    const value = BRACKETS[current].value;
    stack.push(temp === 0 ? value : temp * value);
  } else {
    stack.push(current);
  }
}

let result = 0;

if (!isInvalid) {
  for (const item of stack) {
    if (typeof item !== "number") {
      isInvalid = true;
      break;
    }
    result += item;
  }
}

console.log(isInvalid ? 0 : result);
