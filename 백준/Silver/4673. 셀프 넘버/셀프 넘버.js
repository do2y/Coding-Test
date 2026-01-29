const numSet = new Set();
for (let i = 1; i <= 10000; i++) {
  numSet.add(i);
}

for (let i = 1; i <= 10000; i++) {
  const sum = String(i)
    .split("")
    .map(Number)
    .reduce((a, c) => a + c, 0);
  const result = i + sum;
  numSet.delete(result);
}

const sortedArr = [...numSet].sort((a, b) => a - b);
console.log(sortedArr.join("\n"));
