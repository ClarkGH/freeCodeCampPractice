var Todos = require('../db/collections/todos');
var Todo = require('../db/models/todo');


module.exports = {

  /*
   * GET /
  **/
  getTodos: function (req, res, next) {
    var todos = new Todos();
    var order = req.query.order || "asc";

    var opts = {
      order: order
    };

    todos.fetch()
    .then(function (data) {
      res.render('index', {
        title: 'Todos',
        todos: data.toJSON()
        // todos: data.collection.toJSON()
      });
      // console.log(data.toJSON())
    })
    .catch(function (error) {
      console.error(error.stack);
      req.flash('errors', {'msg': error.message});
      res.redirect('/');      
    });
  },


//    /*
//    * GET /posts/:slug
//    */
//   getPost: function (req, res) {
//     var slug = req.params.slug;

//     return Post.forge({slug: slug})
//     .fetch({
//       withRelated: ['author', 'tags', 'category']
//     })
//     .then(function (post) {
//       res.render('post', {
//         title: 'Post',
//         post: post.toJSON()
//       });
//     })
//     .otherwise(function (error) {
//       req.flash('errors', {'msg': error.message});
//       res.redirect('/');
//     });
//   }

};
