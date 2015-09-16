var fs = require('fs');
var fileName = process.argv[2];
var file = fs.readFileSync(fileName);

var string = file.toString();

console.log(string.split('\n').length - 1);