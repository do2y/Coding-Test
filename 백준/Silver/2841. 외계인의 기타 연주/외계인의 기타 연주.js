const fs = require("fs");
const input = fs
  .readFileSync(0, "utf8")
  .trim()
  .replaceAll(/\r/g, "")
  .split("\n");

const [_, P] = input[0].split(" ").map(Number);
const melody = input.slice(1);

const guitar = {};
let moves = 0;

for (let i = 0; i < melody.length; i++) {
  let [line, fret] = melody[i].split(" ").map(Number);
  const stack = guitar[line] || (guitar[line] = []);

  while (stack.length && stack[stack.length - 1] > fret) {
    stack.pop();
    moves++;
  }

  if (!stack.length || stack[stack.length - 1] < fret) {
    stack.push(fret);
    moves++;
  }
}

console.log(moves);
