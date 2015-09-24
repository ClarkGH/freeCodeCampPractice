var fs = require('fs');
var data = 'Hello World';

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with the encoding of UTF8
writerStream.write(data, 'UTF8');

// Mark the end of the file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
  console.log("write completed.");
});

writerStream.on('error', function(err){
  console.log(err.stack);
})

console.log("program ended")