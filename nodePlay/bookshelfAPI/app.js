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
var _ = require('lodash');
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

// application routing
var router = express.Router();

// body-parser middleware for handling request variables
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

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

// Collections
var Users = Bookshelf.Collection.extend({
  model: User
});

var Users = Bookshelf.Collection.extend({
  model: Post
});

var Users = Bookshelf.Collection.extend({
  model: Category
});

var Users = Bookshelf.Collection.extend({
  model: Tag
});

/**
Next we need to define our API end points - we need to be able to perform basic CRUD operations on the following resources: `users`, `categories`, and `posts`.
### Users
 - `GET    /users`    - fetch all users
 - `POST   /user`     - create a new user
 - `GET    /user/:id` - fetch a single user
 - `PUT    /user/:id` - update user
 - `DELETE /user/:id` - delete user
### Categories
 - `GET    /categories`   - fetch all categories
 - `POST   /category`     - create a new category
 - `GET    /category/:id` - fetch a single category
 - `PUT    /category/:id` - update category
 - `DELETE /category/:id` - delete category
### Posts
 - `GET    /posts`    - fetch all posts
 - `POST   /post`     - create a new post
 - `GET    /post/:id` - fetch a single post
 - `PUT    /post/:id` - update post
 - `DELETE /post/:id` - delete post
 - `GET    /posts/category/:id` - fetch all posts from a single category
 - `GET    /posts/tags/:slug`   - fetch all posts from a single tag us
All is set, now we can go ahead and start setting up our api routes. First up we'll create a users route, every post created will require a user.
**/

