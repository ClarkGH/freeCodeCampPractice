var bookshelf = require('../schema');
var Turtle = require('../models/turtle');

var Turtles = new bookshelf.Collection();

Turtles.model = Turtle;

module.exports = Turtles;