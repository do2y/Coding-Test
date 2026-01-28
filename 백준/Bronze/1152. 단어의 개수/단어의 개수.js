const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const wordCount = input === "" ? 0 : input.split(" ").length;

console.log(wordCount);
