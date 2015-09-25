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

var Todo = Bookshelf.Model.extend({
  tableName: 'todos',
  hasTimestamps: true
});

module.exports = Todo;