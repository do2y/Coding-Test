const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    let arr = line.split(" ");
    let sum = Number(arr[0]) + Number(arr[1]);
    console.log(arr[0] + " + " + arr[1] + " = " + sum)
});

