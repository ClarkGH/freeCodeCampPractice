var knex = require('knex')({
  client: 'pg',
  connection: {
    host       : 'localhost',
    user       : 'clarkhinchcliff',
    password   : 'password',
    database   : 'todo',
    charset    : 'utf8'
  }
});

var Bookshelf = require('bookshelf')(knex);

var _ = require('lodash');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Models
var Todo = require('./db//models/todo.js')

// Collections
var Todos = require('./db/collections/todos.js')

// app routing
var router = express.Router();

// body-parser middleware that handles all the req. variables
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routing
router.route('/todos')
  // fetch all todos
  .get(function (req, res) {
    Todos.forge()
    .fetch()
    .then(function (collection) {
      res.json({error: false, data: collection.toJSON()});
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  })

  // create a todo
  .post(function (req, res) {
    Todo.forge({
      name: 'steve',
      // name: req.body.name,
      description: 'steve, stop kicking children'
      // description: req.body.description,
    })
    .save()
    .then(function (user) {
      res.json({error: false, data: {id: user.get('id')}});
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    }); 
  });

// router.route('/users/:id')
//   // fetch user
//   .get(function (req, res) {
//     User.forge({id: req.params.id})
//     .fetch()
//     .then(function (user) {
//       if (!user) {
//         res.status(404).json({error: true, data: {}});
//       }
//       else {
//         res.json({error: false, data: user.toJSON()});
//       }
//     })
//     .otherwise(function (err) {
//       res.status(500).json({error: true, data: {message: err.message}});
//     });
//   })

//   // update user details
//   .put(function (req, res) {
//     User.forge({id: req.params.id})
//     .fetch({require: true})
//     .then(function (user) {
//       user.save({
//         name: req.body.name || user.get('name'),
//         email: req.body.email || user.get('email')
//       })
//       .then(function () {
//         res.json({error: false, data: {message: 'User details updated'}});
//       })
//       .otherwise(function (err) {
//         res.status(500).json({error: true, data: {message: err.message}});
//       });
//     })
//     .otherwise(function (err) {
//       res.status(500).json({error: true, data: {message: err.message}});
//     });
//   })

//   // delete a user
//   .delete(function (req, res) {
//     User.forge({id: req.params.id})
//     .fetch({require: true})
//     .then(function (user) {
//       user.destroy()
//       .then(function () {
//         res.json({error: true, data: {message: 'User successfully deleted'}});
//       })
//       .otherwise(function (err) {
//         res.status(500).json({error: true, data: {message: err.message}});
//       });
//     })
//     .otherwise(function (err) {
//       res.status(500).json({error: true, data: {message: err.message}});
//     });
//   });

app.use('/', router);
app.listen(3000, function() {
  console.log("Server is running on localhost:3000")
})