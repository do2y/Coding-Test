const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [_, X] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

const filteredA = A.filter((num) => num < X);
console.log(filteredA.join(" "));
