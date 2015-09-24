var Bookshelf = require('bookshelf');

var knex = !process.env.DATABASE_URL ? require('./local_config.js') :
  require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL
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