const fs = require('fs');

const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  output: process.stdout,
  terminal: false,
});

let counter = 0;
let newPass = new Map;

rl.on('line', (line) => {
  if (line.length === 0) {
    if ((newPass.size >= 7 && !newPass.has('cid') || (newPass.size === 8 && newPass.has('cid')))) {
      counter++;
    }
    newPass.clear();
  } else {
    const passData = line.split(' ');
    for (let i = 0; i < passData.length; i++) {
      const [key, value] = passData[i].split(':');
      newPass.set(key, value);
    }
  }
});
rl.on('close', () => {
  console.log(counter);
})

// wrong: 249 too low
// wrong: 146 too low
// wrong: 127