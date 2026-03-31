const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N] = input[0].split(" ").map(Number);

const prices = input.slice(1).map((v) => v.split(" ").map(Number));

const minPackagePrice = Math.min(...prices.map((v) => v[0]));
const minUnitPrice = Math.min(...prices.map((v) => v[1]));

let total = 0;
if (minUnitPrice < minPackagePrice / 6) {
  total = minUnitPrice * N;
} else {
  total = Math.floor(N / 6) * minPackagePrice;

  let res = N % 6;
  if (minUnitPrice * res < minPackagePrice) {
    total += minUnitPrice * res;
  } else total += minPackagePrice;
}

console.log(total);
