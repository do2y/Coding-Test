const fs = require("fs");
let [N, kim, lim] = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

let round = 0;

while (true) {
  round++;

  if (Math.ceil(kim / 2) === Math.ceil(lim / 2)) break;

  kim = Math.ceil(kim / 2);
  lim = Math.ceil(lim / 2);
}

console.log(round);