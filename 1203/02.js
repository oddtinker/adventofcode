// works for puzzle 2 with skipping line 0 and every odd line
// right final answer: (87 * 205 * 85 * 79 * 33) = 3952146825

const fs = require('fs');

const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input copy.txt'),
  output: process.stdout,
  terminal: false,
});

let counter = 0;
let indent = 1;
let lineIndex = -1;

rl.on('line', line => {
  lineIndex++;
  if (lineIndex > 1) {
    if (lineIndex % 2 === 0) {
      indent += 1;
      if (indent > line.length) {
        indent -= line.length;
      }
      if (line[indent -1] === '#') {
        counter++;
      }
    }
  }
});
rl.on('close', () => {
  console.log(counter)
});
