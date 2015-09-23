var knex = require('knex')({
  client: 'pg',
  connection: {
    host      : process.env.PG_CONNECTION_STRING,
    user      : 'clarkhinchcliff',
    password  : 'password',
    database  : 'my_testapp',
    charset   : 'utf8'

  }
});

var Bookshelf = require('bookshelf')(knex);