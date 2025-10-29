const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (const alphabet of croatia) {
  input = input.replaceAll(alphabet, "*");
}

console.log(input.length);
