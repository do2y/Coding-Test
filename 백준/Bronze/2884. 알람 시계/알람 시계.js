const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

let [H, M] = input.split(" ").map(Number);
const EARLY = 45;

M -= EARLY;
if (M < 0) {
  M += 60;
  H = (H - 1 + 24) % 24;
}

console.log(`${H} ${M}`);
