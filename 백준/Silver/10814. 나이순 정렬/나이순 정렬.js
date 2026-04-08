const fs = require("fs");
const input = fs
  .readFileSync(0, "utf8")
  .trim()
  .replaceAll(/\r/g, "")
  .split("\n");

const rawData = input.slice(1);
const users = rawData.map((line) => line.split(" "));

users.sort((a, b) => Number(a[0]) - Number(b[0]));

users.forEach((user) => console.log(`${user[0]} ${user[1]}`));
