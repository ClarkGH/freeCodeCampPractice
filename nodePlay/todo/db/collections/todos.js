var Todo = require('../models/todo.js');

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

var Todos = Bookshelf.Collection.extend({
  model: Todo
});

module.exports = Todos;