const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  output: process.stdout,
  terminal: false,
});

let counter = 0;

rl.on('line', (line) => {
  const [rules, password] = line.split(': ');
  const [range, letter] = rules.split(' ');
  const letterArray = password.split('').filter(char => char === letter);
  const [min, max] = range.split('-').map(num => parseInt(num, 10));
  if (letterArray.length >= min && letterArray.length <= max) {
    counter++;
  }
});
rl.on('close', () => {
  console.log(counter);
})