const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

let n = Number(input[0]);

let log = input.slice(1);
let leftSet = new Set();

log.forEach(entry => {
    let [name, status] = entry.split(" ");
    if(status === 'enter' || status === 'enter\r')
        leftSet.add(name);
    else
        leftSet.delete(name);
})

let answer = [...leftSet].sort();
answer.reverse();
console.log(answer.join("\n"));
