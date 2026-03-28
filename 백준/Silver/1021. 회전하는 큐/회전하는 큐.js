const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, _] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

const queue = Array.from({ length: N }, (_, i) => i + 1);

let count = 0;

for (let i = 0; i < numbers.length; i++) {
  const target = numbers[i];

  while (true) {
    const idx = queue.indexOf(target);

    if (idx === 0) {
      queue.shift(); 
      break;
    }

    if (idx <= queue.length / 2) {
      queue.push(queue.shift());
    } else {
      queue.unshift(queue.pop());
    }

    count++;
  }
}

console.log(count);
