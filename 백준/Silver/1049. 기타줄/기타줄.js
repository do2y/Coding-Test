const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N] = input[0].split(" ").map(Number);
const prices = input.slice(1).map((v) => v.split(" ").map(Number));

const minPackagePrice = Math.min(...prices.map((v) => v[0]));
const minUnitPrice = Math.min(...prices.map((v) => v[1]));

const total = Math.min(
  minPackagePrice * Math.ceil(N / 6),
  minPackagePrice * Math.floor(N / 6) + minUnitPrice * (N % 6),
  minUnitPrice * N,
);

console.log(total);
