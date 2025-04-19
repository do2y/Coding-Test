const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = [];
let set = new Set(input[1].split(" "));

let arr = input[3].split(" ");
arr.forEach(num => {
    set.has(num) ? answer.push(1) : answer.push(0);
})

console.log(answer.join("\n"));