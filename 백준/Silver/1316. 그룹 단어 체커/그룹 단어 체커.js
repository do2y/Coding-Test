const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");

const words = input.slice(1);
let cnt = 0;

for (let word of words) {
  let isGroup = true;

  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] !== word[i + 1] && word.slice(i + 1).includes(word[i])) {
      isGroup = false;
      break;
    }
  }

  if (isGroup) cnt++;
}

console.log(cnt);
