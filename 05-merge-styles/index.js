const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, "styles");
const bundlePath = path.join(__dirname, "project-dist", "bundle.css");

fs.readdir(cssPath, (err, files) => {
  if (err) throw err;
  files.forEach((file) => {
    const filePath = path.join(cssPath, file);

    fs.stat(filePath, (err, stats) => {

      if (err) throw err;
      if(stats.isFile() && path.parse(file).ext.slice(1) == "css"){
        
        let currentReadStream = fs.createReadStream(filePath);
        currentReadStream.on('data', (e) => {
            fs.appendFile(bundlePath, e, () => console.log('appended'));
        });
      }
    });
  });
});