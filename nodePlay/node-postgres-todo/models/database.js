var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';

var client = new pg.Client(connectionString);
client.connect();

var query = client.quert('CREATE TABLE itemds(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN');
query.on(
  'end', 
  function() { 
    client.end(); 
  }
);