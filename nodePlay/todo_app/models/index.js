var moment = require('moment');

var knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'clarkhinchcliff',
    password: 'password',
    database: 'todo'
  }
});

var bookshelf = require("bookshelf")(knex);
bookshelf.plugin('visibility');

var Todo = bookshelf.Model.extend({
  tableName: 'todos',
  hasTimestamps: true
});
exports.Todo = Todo;