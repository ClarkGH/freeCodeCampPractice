var express = require('express'),
    app = express(),
    router = express.Router(),
    path = require('path'),
    bodyParser = require('body-parser'),
    _ = require('lodash');

//db
var bookshelf = require('./schema');

//models
var Owner = require('./models/owner'),
    Turtle = require('./models/turtle');

// collections
var Owners = require('./collections/owners'),
    Turtles = require('./collections/turtles');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//get all owners route
app.get('/', function (req, res, next) {
  var owners = Owners;
  owners.fetch()
  .then( function (data ) {
    console.log(data.toJSON())
    res.render('index', {
      title: 'Owners of turtles',
      owners: data.toJSON()
    });    
  })
  .catch(function (error) {
    console.error(error.stack);
    req.flash('errors', {'msg': error.message});
    res.redirect('/');
  });
});

app.listen(3000);

console.log('listening on port 3000')