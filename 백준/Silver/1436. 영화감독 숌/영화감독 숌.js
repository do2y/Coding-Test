const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

let n = input[0];

let number = 666;
let cnt = 1;
let regex = /666/;

while(cnt < n){
    number++;
    if(regex.test(String(number)))
        cnt++;
}

console.log(number);