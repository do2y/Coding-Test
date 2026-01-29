const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const nums = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

let mean = nums.reduce((a, c) => a + c, 0) / N;
mean = Math.round(mean);
if (mean === -0) mean = 0;

const mid = nums[Math.floor(N / 2)];

const count = {};
for (const num of nums) {
  count[num] = (count[num] || 0) + 1;
}

const sortedFreq = Object.entries(count).sort((a, b) => {
  if (b[1] !== a[1]) return b[1] - a[1];
  return Number(a[0]) - Number(b[0]);  
});

let mode;
if (sortedFreq.length > 1 && sortedFreq[0][1] === sortedFreq[1][1]) {
  mode = Number(sortedFreq[1][0]);
} else {
  mode = Number(sortedFreq[0][0]);
}

const range = nums[N - 1] - nums[0];

console.log(mean);
console.log(mid);
console.log(mode);
console.log(range);
