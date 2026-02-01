const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

let count = 0;
let start = 0;
let end = 0;
let sum = 0;

while (true) {
  if (sum >= M) {
    sum -= nums[start];
    start++;
  } else if (end === N) {
    break;
  } else {
    sum += nums[end];
    end++;
  }
  if (sum === M) count++;
}

console.log(count);
