var fs = require('fs');
var zlib = require('zlib');

// compress the file input.txt to input.txt.gs
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

console.log("File Compressed");