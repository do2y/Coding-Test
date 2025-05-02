const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

let answer = [];

let cardArr = input[1].split(" ").map(v => Number(v));
let cardSet = new Set(cardArr);

let compareNumArr = input[3].split(" ").map(v => Number(v));

compareNumArr.forEach(card => {
    if(cardSet.has(card))
        answer.push(1);
    else
        answer.push(0);
});

console.log(answer.join(" "));