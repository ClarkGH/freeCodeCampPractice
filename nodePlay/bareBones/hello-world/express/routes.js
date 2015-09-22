// Every route in use
var express = require('express');
var app = express();

// Responds with hello world on hompage
app.get('/', function (req, res) {
  console.log("Got a GET request for the homepage");
  res.send('Hello GET');
})

// Responds with a POST request for the homepage
app.post('/', function (req, res) {
  console.log("Got a POST request for the homepage");
  res.send('Hello POST');
})

// Responds with a DELETE request for the /del_user page
app.delete('/del_user', function (req, res) {
  console.log("Got a Delete request for /del_user");
  res.send('Hello DELETE');
})

// Responds with a GET request for the /list_user page
app.get('/list_user', function (req, res) {
  console.log("Got a GET request for /list_user");
  res.send('Page Listing');
})

// Responds with a GET request for abcd, abxd, ab123cd, etc
app.get('/ab*cd', function (req, res) {
  console.log("Got a GET request for /ab*cd");
  res.send('Page Pattern Match');
})

var server = app.listen(3000, function(){
  console.log("listening at localhost:3000")
})
