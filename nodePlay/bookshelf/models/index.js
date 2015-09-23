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

var Bookshelf = require('bookshelf')(knex);
Bookshelf.plugin('visibility');

var User = Bookshelf.Model.extend({
  tableName: 'users',
  blogpost: function () {
    // one to many
    this.hasMany(Blogpost, "blogpost_id");
  }
});
exports.User = User;

var Category = Bookshelf.Model.extend({
  tableName: 'categories',
  blogpost: function () {
    // one to many
    this.hasMany(Blogpost, "blogpost_id");
  }
});
exports.Category = Category;

var Blogpost = Bookshelf.Model.extend({
  tableName: 'blogposts',
  category: function () {
    // one to one or many to one
    return this.belongsTo(Category, "category_id");
  },
  tag: function () {
    // Many to many
    // 1st param: classname of related table
    // 2nd param: name of related table
    // Other params: Foreign Keys
    return this.belongsToMany(Tag, "posts_tags", "post_id");
  },
  author: function () {
    // Bookshelf assumes that table names are plurals
    // and that the foreignKey is the singular name of the related table fixed with _id
    return this.belongsTo(User, "user_id");
  }
});
exports.Blogpost = Blogpost;

var Tag = Bookshelf.Model.extend({
  tableName: 'tags',
  blogpost: function () {
    return this.belongsToMany(Blogpost, "posts_tags", "tag_id")
  }
});
exports.Tag = Tag;

exports.Bookshelf = Bookshelf;