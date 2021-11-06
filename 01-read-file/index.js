const fs = require('fs');
const path = require('path');

let filePath = path.join(__dirname, 'text.txt')
let data = '';

const stream = fs.createReadStream(filePath, 'utf-8');

stream.on('data', chunk => data += chunk);
stream.on('end', () => console.log(data));
stream.on('error', error => console.log('Error', error.message));