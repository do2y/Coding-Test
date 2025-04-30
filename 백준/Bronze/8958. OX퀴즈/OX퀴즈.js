const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString()
    .trim()
    .split('\n');

let arr = input.slice(1); 

let scoreArr = arr.map(answer => {
    let cnt = 0;
    let score = 0;
    for(let i=0; i<answer.length; i++){
        answer[i] === "O" ? cnt++ : cnt=0;
        score += cnt;
    }
    return score;
});

console.log(scoreArr.join('\n'));
