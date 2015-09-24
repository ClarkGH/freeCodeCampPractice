var Bookshelf = require('bookshelf');

var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : 'localhost',
    user     : 'clarkhinchcliff',
    password : 'password',
    database : 'todo'
  }
});

var db = require('bookshelf')(knex);
db.plugin('registry');

db.knex.schema.hasTable('todos').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('todo', function (todo) {
      todo.increments('id').primary();
      todo.string('name', 100).unique();
      todo.string('description', 500);
      todo.boolean('completed');
      todo.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;