const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

let blocks = input.split(" ").map(Number);

while (true) {
  let sorted = true;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] > blocks[i + 1]) {
      [blocks[i], blocks[i + 1]] = [blocks[i + 1], blocks[i]];
      console.log(blocks.join(" "));
      sorted = false;
    }
  }

  if (sorted) break;
}
