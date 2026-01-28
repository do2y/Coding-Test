const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [h, m] = input[0].split(" ").map(Number);
const cookTime = Number(input[1]);

const minute = (m + cookTime) % 60;
const hour = (h + Math.floor((m + cookTime) / 60)) % 24;

console.log(hour + " " + minute);
