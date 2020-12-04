// works with both puzzles where you only skip line 0

const fs = require('fs');

const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  output: process.stdout,
  terminal: false,
});

let counter = 0;
let indent = 1;
let isFirstLine = true;

rl.on('line', line => {
  if (isFirstLine) {
    isFirstLine = false;
  } else {
    indent += 3;
    if (indent > line.length) {
      indent -= line.length;
    }
    if (line[indent - 1] === '#') {
      counter++;
    }
  }
});
rl.on('close', () => {
  console.log(counter)
});