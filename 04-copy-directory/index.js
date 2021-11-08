const fs = require('fs');
const path = require('path');

const newFoderPath = path.join(__dirname, "files-copy");
const folderPath = path.join(__dirname, "files");

fs.mkdir(newFoderPath, { recursive: true }, (err) => {
  if (err) throw err;
});

// Delete new files from new folder
fs.readdir(newFoderPath, (err, files) => {

  if (err) throw err;
  
  files.forEach((file) => {
   
    const newFilePath = path.join(newFoderPath, file);

    fs.unlink(newFilePath, err => {
      if(err) throw err; 
    });

  });

});

// Copy folder
fs.readdir(folderPath, (err, files) => {

  if (err) throw err;
  
  files.forEach((file) => {
   
    const newFilePath = path.join(newFoderPath, file);
    const filePath = path.join(folderPath, file);

    fs.copyFile(filePath, newFilePath, err => {
      if(err) throw err; 
    });

  });

});