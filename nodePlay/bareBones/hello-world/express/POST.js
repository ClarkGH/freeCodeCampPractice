var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
  res.sendFile( __dirname + "/" + "post-index.html");
})

app.post('/process_post', urlencodedParser, function (req, res) {

  // Prepare output in JSON format
  response = {
    first_name:req.body.first_name,
    last_name:req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

var server = app.listen(3000, function () {
  console.log("Example application is running on port 3000")
  
})