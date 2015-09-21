var http = require('http'); //loads the core http modules
// below creates a server with a callback which contains the response handler code
http.createServer(function (req, res) { 
  // The following sets the right header and status code
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // outputs with the end symbol
  res.end("Yo, kids. Look! A running Node.js server.\n");
  // The req and res arguments all have the info about a given HTTP request and response correspondingly.
  // In addition, req and res can be used as streams.
  // To make the server accept requests, we listen...
}).listen(3000);
// to open the server, we type node helloWorld.js
// we'll see the below logged
console.log("Your fabulous server is running at http://localhost:3000")
// to close the server, we type ctl-c