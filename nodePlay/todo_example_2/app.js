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

// Use bodyParser
app.use(bodyParser.urlencoded({ extended: false }))


app.route('/') 
  // get all owners
  .get(function (req, res, next) {
    var owners = Owners;
    owners.fetch()
    .then( function (owners) {
      res.render('index', {
        title: 'Owners of turtles',
        owners: owners.toJSON()
      });    
    })
    .catch(function (error) {
      console.error(error.stack);
      res.render('error', {
        error: error
      })
    });
  })
  // create a new owner
  .post(function (req, res) {
    console.log(req.body);
    Owner.forge({
      name: req.body.name,
      smells: req.body.smells,
      arms: parseInt(req.body.arms)
    })
    .save()
    .then(function (owner) {
      req.method = 'get';
      res.redirect('/');
    })
    .catch(function (error) {
      console.error(error.stack);
      res.render('error', {
        error: error
      })
    })
  });

app.route('/:id') 
  //get specific owner and his turtles
  .get(function (req, res) {
    var id = req.params.id;
    Owner.forge({id: id})
    .fetch({
      withRelated: ['turtles']
    })
    .then(function (data) {
      var owner = data.toJSON();
      res.render('owner', {
        title: owner.name,
        owner: owner
      })
    })
    .catch(function (error) {
      console.error(error.stack);
      res.render('error', {
        error: error
      })
    })
  })

  // update owner details
  .post(function (req, res) {
    Owner.forge({id: req.params.id})
    .fetch({require: true})
    .then(function (owner) {
      owner.save({
        name: req.body.name || owner.get('name'),
        arms: req.body.arms || owner.get('arms'),
        smells: req.body.smells || owner.get('smells')
      })
      .then(function () {
        req.method = 'get';
        res.redirect('/');
      })
      .catch(function (error) {
        console.error(error.stack);
        res.render('error', {
          error: error
        })
      })
    })
    .catch(function (error) {
      console.error(error.stack);
      res.render('error', {
        error: error
      })
    })
  });


  //delete specific owner and all of his turtles
app.post('/delete/:id', function (req, res) {
  var id = req.params.id;
  Owner.forge({id: id})
  .fetch({
    withRelated: ['turtles']
  })
  .then(function (owner) {
    var deletedOwner = owner.toJSON();
    owner.related('turtles')
    .invokeThen('destroy')
    .then(function () {
      owner.destroy().then(function () {
        console.log('Successfully deleted owner ' + deletedOwner.name + ' and all of his filthy turtles from our glorious database');
        req.method = 'get';
        res.redirect('/');
      })
    })
  })
  .catch(function (error) {
    console.error(error.stack);
    res.render('error', {
      error: error
    })
  })
})

app.listen(3000);

console.log('listening on port 3000')