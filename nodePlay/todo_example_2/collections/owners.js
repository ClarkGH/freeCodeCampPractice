var bookshelf = require('../schema');
var Owner = require('../models/owner');

var Owners = new bookshelf.Collection();

Owners.model = Owner;

module.exports = Owners;