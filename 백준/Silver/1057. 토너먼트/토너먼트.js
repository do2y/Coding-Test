const fs = require("fs");
let [N, kim, lim] = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

let round = 0;
while (N > 1) {
  round++;

  if ((kim % 2 !== 0 && lim === kim + 1) || (lim % 2 !== 0 && kim === lim + 1))
    break;

  kim = Math.ceil(kim / 2);
  lim = Math.ceil(lim / 2);
  N = N / 2;
}

console.log(round);
