const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, need] = input[0].split(" ").map(Number);
const trees = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let left = 0;
let right = trees[0];
let result = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let cutWood = 0;

  for (const tree of trees) {
    if (tree > mid) cutWood += tree - mid;
  }

  if (cutWood >= need) {
    result = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(result);
