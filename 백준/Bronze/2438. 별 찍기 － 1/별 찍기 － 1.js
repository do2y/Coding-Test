const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const n = Number(input);
const arr = [];

for (let i = 1; i <= n; i++) {
  const str = "*".repeat(i);
  arr.push(str);
}

console.log(arr.join("\n"));
