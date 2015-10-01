var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : 'localhost',
    user     : 'clarkhinchcliff',
    password : 'password',
    database : 'turtles'
  }
});

var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

// Owner columns: Name, Arms, Smells
bookshelf.knex.schema.hasTable('owners')
.then(function(exists) {
  if (!exists) {
    bookshelf.knex.schema.createTable('owners', function (owner) {
      owner.increments('id').primary();
      owner.string('name', 150).unique();
      owner.integer('arms').unsigned();
      owner.string('smells', 150);
      owner.timestamps();
    })
    .then(function (table) {
      console.log('Created Table', table)
    });
  }
});

// Turtle column: Owner_id, Name, CanDance
bookshelf.knex.schema.hasTable('turtles')
.then(function(exists) {
  if (!exists) {
    bookshelf.knex.schema.createTable('turtles', function (turtle) {
      turtle.increments('id').primary();
      turtle.string('owner_id', 255);
      turtle.string('name', 150).defaultTo('Turtle');
      turtle.boolean('canDance').defaultTo(false);
      turtle.timestamps();
    })
    .then(function (table) {
      console.log('Created Table', table)
    });
  }
});

module.exports = bookshelf;