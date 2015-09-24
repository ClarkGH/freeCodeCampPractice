var express = require('express');
var router = express.Router();

var Todo = require('./../app/models/todo.js');

/* GET home page. */
router.get('/todos', function(req, res, next) {
  new Todo()
    .fetchAll()
    .then(function (collection) {
      var todos = [];

      for (var i = 0; i < collection.length; i++) {
        var temp = [];
        temp[0] = collection.at(i).attributes.todo;
        temp[1] = collection.at(i).attributes.id;
        todos.push(temp);
      }
      res.json(todos);
    });
});

module.exports = router;
