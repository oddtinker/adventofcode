const fs = require('fs');

const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  output: process.stdout,
  terminal: false,
});

let counter = 0;
let answers = [];

rl.on('line', (line) => {
  if (line.length === 0) {
    let result = answers.reduce((a, b) => a.filter(item => b.includes(item)));
    counter += result.length;
    answers = [];
  } else {
    const splitLine = line.split('');
    answers.push(splitLine);
  }
});
rl.on('close', () => {
  console.log(counter);
});
