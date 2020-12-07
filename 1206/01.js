const fs = require('fs');

const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  output: process.stdout,
  terminal: false,
});

let counter = 0;
let answers = new Set();

rl.on('line', (line) => {
  if (line.length === 0) {
    counter += answers.size;
    answers.clear();
  } else {
    const data = line.split('');
    for (let i = 0; i < data.length; i++) {
      answers.add(data[i]);
    }
  }
});
rl.on('close', () => {
  console.log(counter);
});