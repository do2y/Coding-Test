const fs = require("fs");
const students = fs
  .readFileSync(0, "utf8")
  .trim()
  .replaceAll(/\r/g, "")
  .split("\n")
  .map(Number);

for (let num = 1; num <= 30; num++) {
  if (!students.includes(num)) console.log(num);
}
