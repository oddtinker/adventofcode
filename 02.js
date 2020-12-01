const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  output: process.stdout,
  terminal: false
});

let numsMap = new Map();
rl.on('line', (line) => {
  const number = parseInt(line, 10);
  numsMap.set(number, 2020 - number);
});
rl.on('close', () => {
  for (let [key, value] of numsMap.entries()) {
    for (otherKey of numsMap.keys()) {
      if ((otherKey !== key) && (otherKey < value) && (key + otherKey < 2020)) {
        let rest = 2020 - (otherKey + key);
        if (numsMap.has(rest)) {
          console.log([key, otherKey, rest], key+ otherKey+ rest, key * otherKey * rest);
        }
      }
    }
  }
})