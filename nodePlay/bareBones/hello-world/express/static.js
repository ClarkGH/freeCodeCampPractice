var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World');
})

var server = app.listen(3000, function () {
  console.log('Listening on port 3000')
})

// load up the server and there is now access to images/belch.gif