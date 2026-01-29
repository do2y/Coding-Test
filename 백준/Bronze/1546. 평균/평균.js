const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const T = Number(input[0]);
const scores = input[1].split(" ").map(Number);

const M = Math.max(...scores);
const changed = scores.map((v) => (v / M) * 100);

const mean = changed.reduce((a, c) => a + c, 0) / T;
console.log(mean);
