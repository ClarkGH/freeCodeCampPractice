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

// MODELS

// User model
var User = Bookshelf.Model.extend({
  tableName: 'users'
});

// Post model
var Post = Bookshelf.Model.extend({
  tableName: 'posts'

  hasTimestamps: true,

  category: function () {
    return this.belongsTo(Category, 'category_id');
  },

  tags: function () {
    return this.belongsToMany(Tag);
  },

  author: function () {
    return this.belongsTo(User);
  }
});

// Category model
var Category = Bookshelf.Model.extend({
  tableName: 'categories',

  posts: function () {
    return this.belongsToMany(Post, 'category_id')
  }
});

// Tag model
var Tag = Bookshelf.Model.extend({
  tableName: 'tags',

  posts: function () {
    return this.belongsToMany(Post);
  }
});