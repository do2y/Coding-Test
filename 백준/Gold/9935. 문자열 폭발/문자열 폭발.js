const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const str = input[0];
const boom = input[1];

const stack = [];
for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  stack.push(ch);

  if (stack.length >= boom.length) {
    if (stack.slice(-boom.length).join("") === boom) {
      stack.length -= boom.length;
    }
  }
}

if (stack.length === 0) console.log("FRULA");
else console.log(stack.join(""));
