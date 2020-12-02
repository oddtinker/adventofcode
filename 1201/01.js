const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  output: process.stdout,
  terminal: false,
});

let numsMap = new Map();
rl.on('line', (line) => {
  const number = parseInt(line, 10);
  numsMap.set(number, 2020 - number);
});
rl.on('close', () => {
  for (let [key, value] of numsMap.entries()) {
    if (numsMap.has(value)) {
      console.log(key*value);
      break;
    }
  }
})