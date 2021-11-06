const fs = require('fs');
const path = require('path');
const { stdin, stdout } = require('process');

const filePath = path.join(__dirname, 'newtext.txt');
const output = fs.createWriteStream(filePath);

stdout.write('Hi everybody. Please enter some text:\n');
stdin.on('data', data => {
  if(data.toString().trim() == 'exit'){
    stdout.write('Thank you for entering text. Good luck!');
    process.exit();
  }
  output.write(data)
});

process.on('beforeExit', ()=>{
  stdout.write('Thank you for entering text. Good luck!');
  process.exit();
});

process.on('SIGINT', ()=>{
  stdout.write('Thank you for entering text. Good luck!');
  process.exit();
});
