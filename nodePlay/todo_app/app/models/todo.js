var db = require('../config');
var Promise = require('bluebird');

var Todo = db.Model.extend({
  tableName: 'todos',
  hasTimestamps: true,
});

module.exports = db.model('Todo', Todo)