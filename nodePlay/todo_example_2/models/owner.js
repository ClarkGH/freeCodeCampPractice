var bookshelf = require('../schema');

var Owner = bookshelf.Model.extend({
  tableName: 'owners',
  hasTimestamps: true,
  turtles: function() {
    return this.hasMany('Turtle', 'owner_id');
  }
})

module.exports = bookshelf.model('Owner', Owner);