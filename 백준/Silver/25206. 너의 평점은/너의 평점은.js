const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .replaceAll(/\r/g, "")
  .split("\n");

const gradeObj = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
  P: 0.0,
};

let sum = 0;
let totalCredit = 0;

for (let i = 0; i < 20; i++) {
  let subject = input[i].split(" ");

  let grade = subject[2];
  let credit = Number(subject[1]);

  if (grade !== "P") {
    sum += gradeObj[grade] * credit;
    totalCredit += credit;
  }
}

console.log(sum / totalCredit);
