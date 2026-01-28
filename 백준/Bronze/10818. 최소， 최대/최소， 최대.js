const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = input[0];
const nums = input[1].split(" ").map(Number);

const min = Math.min(...nums);
const max = Math.max(...nums);

console.log(min + " " + max);
