const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

let n = Number(input[0]);
let dictSet = new Set(input.slice(1, 1 + n));

let dict = [];

[...dictSet].forEach((word) => {
    dict.push({ word, len: word.length });
});

dict.sort((a, b) => a.len - b.len || a.word.localeCompare(b.word));

console.log(dict.map(entry => entry.word).join('\n'));
