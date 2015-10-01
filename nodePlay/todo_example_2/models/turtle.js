var bookshelf = require('../schema');

var Turtle = bookshelf.Model.extend({
  tableName: 'turtles',
  hasTimestamps: true,
  owner: function() {
    return this.belongsTo('Owner', 'owner_id');
  }
})

module.exports = bookshelf.model('Turtle', Turtle);