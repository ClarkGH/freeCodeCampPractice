var moment = require('moment');

var knex = require('knex')({
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'clarkhinchcliff',
      password: 'password',
      database: 'test'
    }
});

