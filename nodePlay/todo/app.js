var _ = require('lodash');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// app routing
var router = express.Router();

// body-parser middleware that handles all the req. variables
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

