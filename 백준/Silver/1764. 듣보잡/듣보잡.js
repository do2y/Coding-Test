let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let list = [];

let [n, m] = input[0].split(' ').map(Number);
let neverHeard = new Set(input.slice(1, 1 + n));
let neverSeen = input.slice(1 + n);

neverSeen.forEach(name => {
    if (neverHeard.has(name)) list.push(name);
});

list.sort();

console.log(`${list.length}\n${list.join('\n')}`);
