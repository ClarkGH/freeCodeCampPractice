var knex = require('knex')({
  client: 'postgresql',
  connection: {
    host      : '127.0.0.1',
    user      : 'clarkhinchcliff',
    password  : 'password',
    database  : 'myapp_test',
    charset   : 'utf8'

  }
});

var Bookshelf = require('bookshelf')(knex);