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
  const letterArray = password.split('');
  const [position1, position2] = range.split('-').map(num => parseInt(num, 10) - 1);
  if (letterArray[position1] === letter && letterArray[position2] !== letter) {
    counter++;
  } else if (letterArray[position1] !== letter && letterArray[position2] === letter) {
    counter++;
  }
});
rl.on('close', () => {
  console.log(counter);
})