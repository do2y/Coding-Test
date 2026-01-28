const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const arr = input.split(" ").filter((v) => v !== "");
const wordCount = arr.length;

console.log(wordCount);
