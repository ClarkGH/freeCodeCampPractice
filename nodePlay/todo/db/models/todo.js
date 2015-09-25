var Bookshelf = require('bookshelf')(knex);

var Todo = Bookshelf.Model.extend({
  tableName: 'todos'
  hasTimestamps: true,
});
