// The best debugger in node is console.log() since it doesn't break the flow
// fast and informative, but need to know where to put it

var http = require('http');
debugger;

http.createServer(function (req, res) {
  res.WriteHead(200, {'Content-Type': 'text/plain'});
  debugger;
  res.end('Hello World\n');
}).listen(3000);

console.log('Server is running at http://localhost:3000');

// nothing will change unless we run $node debug coreDebugger.js