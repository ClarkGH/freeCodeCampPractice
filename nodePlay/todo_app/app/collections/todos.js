var db = require('../config');
var Todo = require('../models/todo');

var Todos = new db.Collection();

Todos.model = Todo;

module.exports = Todos;