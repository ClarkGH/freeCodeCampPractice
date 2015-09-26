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

var path = require('path');
var _ = require('lodash');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Models
var Todo = require('./db//models/todo.js')

// Collections
var Todos = require('./db/collections/todos.js')

// Controller
var todosController = require('./controller/todos');

// app routing
var router = express.Router();
var index = require('./routes/index.js')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

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
      name: req.body.name,
      description: req.body.description,
    })
    .save()
    .then(function (todo) {
      res.json({error: false, data: {id: todo.get('id')}});
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    }); 
  });

router.route('/todos/:id')
  // fetch user
  .get(function (req, res) {
    Todo.forge({id: req.params.id})
    .fetch()
    .then(function (todo) {
      if (!todo) {
        res.status(404).json({error: true, data: {}});
      }
      else {
        res.json({error: false, data: todo.toJSON()});
      }
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  })

  // update user details
  .put(function (req, res) {
    Todo.forge({id: req.params.id})
    .fetch({require: true})
    .then(function (todo) {
      todo.save({
        name: req.body.name || todo.get('name'),
        description: req.body.description || todo.get('description'),
        completed: req.body.completed || todo.get('completed')
      })
      .then(function () {
        res.json({error: false, data: {message: 'Todo details updated'}});
      })
      .catch(function (err) {
        res.status(500).json({error: true, data: {message: err.message}});
      });
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  })

  // delete a todo
  .delete(function (req, res) {
    Todo.forge({id: req.params.id})
    .fetch({require: true})
    .then(function (todo) {
      todo.destroy()
      .then(function () {
        res.json({error: true, data: {message: 'Todo successfully deleted'}});
      })
      .otherwise(function (err) {
        res.status(500).json({error: true, data: {message: err.message}});
      });
    })
    .otherwise(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  });

// app.use('/', index);
app.get('/', todosController.getTodos);

//api requests
app.use('/api', router);

app.listen(3000, function() {
  console.log("Server is running on localhost:3000")
})