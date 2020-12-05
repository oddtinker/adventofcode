const fs = require('fs');

const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  output: process.stdout,
  terminal: false,
});

function validate(key, value) {
  switch(key) {
    case 'byr':
      value = parseInt(value, 10);
      if (value >= 1920 && value <= 2002) {
        return true;
      } else {
        return false;
      }
    case 'iyr':
      value = parseInt(value, 10);
      if (value >= 2010 && value <= 2020) {
        return true;
      } else {
        return false;
      }
    case 'eyr':
      value = parseInt(value, 10);
      if (value >= 2020 && value <= 2030) {
        return true;
      } else {
        return false;
      }
    case 'hgt':
      if (/^(\d){2,3}(cm|in)$/.test(value)) {
        let [num, type] = value.split(/(cm|in)/);
        num = parseInt(num, 10);
        if (type === 'cm') {
          if (num >= 150 && num <= 193) {
            return true;
          } else {
            return false;
          }
        }
        if (type === 'in') {
          if (num >= 59 && num <= 76) {
            return true;
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    case 'hcl':
      return /^#[a-f0-9]{6}$/.test(value);
    case 'ecl':
      return /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(value);
    case 'pid':
      return /^[0-9]{9}$/.test(value);
    default:
      return false;
  }
}

let counter = 0;
let newPass = new Map;

rl.on('line', (line) => {
  if (line.length === 0) {
    if (newPass.size >= 7) {
      counter++;
    }
    newPass.clear();
  } else {
    const passData = line.trim().split(' ');
    for (let i = 0; i < passData.length; i++) {
      const [key, value] = passData[i].split(':');
      const isValueValid = validate(key, value);
      if (isValueValid === true) {
        newPass.set(key, value);
      }
    }
  }
});
rl.on('close', () => {
  console.log(counter);
});