#Node.js Notes

To export an object in Node.js, use exports.name = object;

var messages = {
  find: function(req, res, next) {
  ...
  },
  add: function(req, res, next) {
  ...
  },
  format: 'title | date | author'
}
exports.messages = messages;

while in the file where we want to impore the aformentioned script, write the following: 

var messages = require('./routes/messages.js');

sometimes it's better to invoke a constructor.

module.exports = function(app) {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  return app;
}

in the file that includes the previous sample module, write:  

...
var app = express();
var config = require('./config/index.js');
app = config(app);
...

The more succinct code is var = express(); require('./config/index.js')(app);

###__dirname vs. process.cwd

__dirname is an absolute path to the file in which the global variable is called, whereas process.cwd is an absolute path to the process that runs the script. The latter might not be the same as the former if we started the program from a different folder, such as $ node ./code/program.js.

###Node.js Core Modules  
Unlike other programming technologies, Node.js doesn’t come with a heavy standard library. The core modules of node.js are a bare minimum, and the rest can be cherry-picked via the NPM registry. There is no need to install them, just include them via the following syntax:

var http = require('http');

The main core modules, classes, methods, and events include the following:
1. [http](http://nodejs.org/api/http.html#http_http)
2. [util](http://nodejs.org/api/util.html)
3. [querystring](http://nodejs.org/api/querystring.html)
4. [url](http://nodejs.org/api/url.html)
5. [fs](http://nodejs.org/api/fs.html)

####http
1. the main module responsible for the Node.js HTTP server. It's main methods are:
  1. http.createServer(); returns new web server object
  2. http.listen(); begins acception connections on specified port and hostname
  3. http.createClient(); is a client and makes requests to other servers
  4. http.ServerRequest(); passes incoming request to request handlers
    1. data: emmited when a part of the message body is received
    2. end: emmited exactly once for each request
    3. request.method(); the request method as a string
    4. request.url(); request URL string
  5. http.ServerResponse(); creates the object internally by an HTTP server -- not by the user -- is used as an output of request handlers
    1. response.writeHead(); sends a response header to the request
    2. response.write(); sends a response body
    3. response.end(); send and ends a response body

####util
1. the util module provides utilities for debugging. One method is:
  1. util.inspect(); returns a string representation of an object, which is useful for debugging.

####querystring
1. The querystring module provides utilities for dealing with query strings. Some of the methods include the following:
  1. querystring.stringify(); serializes an object to a string
  2. querystring.parse(); deserializes a query string to an object

####url
1. the url module has utilities for URL resolution and parsing. One method is as follows:
  1. parse(); takes a URL string and returns an object

####fs
1. fs handles file system operations such as reading to and writing from files. There are synchronous and asynchronous methods in the library. Some of the methods are:
  1. fs.readFile(); reads files asynchronously
  2. fs.writeFile(); writes async
  3. look up documentation for more of these methods

Some usefule Node.js utilities include:
1. [Crypto](http://nodejs.org/api/crypto.html) - has a randomizer, and algorithms
2. [Path](http://nodejs.org/api/path.html) - handles system paths
3. [String Decoder](http://nodejs.org/api/string_decoder.html) - decodes to and from buffer string types

##Reading to and Writing from the File system in Node.js
This is done via the core fs module

To Read:

var fs = require('fs');
var path = require('path');
fs.readFile(path.join(__dirname, '/data/customers.csv'), {encoding: 'utf-8'}, function (err, data) {
  if (err) throw err;
  console.log(data);
});

To Write:

var fs = require('fs');
fs.writeFile('message.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('Writing is done.');
});

###Streaming Data in Node.jsz

Streaming data is a phrase that means an application processes the data while it’s still receiving it. This feature is useful for extra large datasets such as video or database migrations.

Here’s a basic example of using streams that output the binary file content back:

var fs = require('fs');
fs.createReadStream('./data/customers.csv').pipe(process.stdout);

[How to debug in Node.js](http://nodejs.org/api/debugger.html)
[Node Inspector](https://github.com/ node-inspector/node-inspector)

##Express.js
Express.js is a web framework based on the core Node.js [http module and Connect](http://www.senchalabs.org/ connect/) components.

Express is a web framework based on middle ware components. If you use only core node.js modules, you'll find yourself reinventing the wheel by repeating the same code continuosly for similar tasks. Tasks like:
1. parsing http request bodies
2. parsing cookies
3. managing sessions
4. organizing route with a chanin of 'if' conditions based on URL paths and HTTP methods of the requests.
5. Determining proper response headers based on data types.

[REST](https://en.wikipedia.org/wiki/Representational_state_transfer)

To be MVC, you will need an ORM (sequelize or bookshelf)

Some analogies to developers who are familiar with Ruby—Express.js is often seen as Sinatra, which has a very different approach to the Ruby on Rails framework. Express.js and Sinatra promote the configurability while Ruby on Rails convention over configuration.

Express vs Meteor vs Derby

###How Express.js Works
Express.js usually has an entry point, aka a main file. Most of the time the file is started with the node command; or export in a module, in some cases. In this study I will do the following.
1. Include third-pary dependencies as well as my own modules, such as controllers, utilities, helpers, and models.
2. Configure Express.js app settings such as template engine and its file extensions
3. Connect to databases such as MongoDB, Redis, or MySQL.
4. Define middleware such as error handlers, static files folder, cookies, and other parsers
5. Define routes
6. Start the app
7. Export the app as a module (optional)

When the express.js app is running, it's listening to requests. Some middleware purposes are:
1. Parse cookie info and put it into the req object for following middleware/routes
2. Parse parameters from the URL and put it in the req object for following middleware/routes
3. Get the information from the database based on the value of the parameter if the user is authorized (cookie/session) and put it in the req object for following middleware/routes
4. Authorize users/requests, or not
5. Display the data and end the response.

