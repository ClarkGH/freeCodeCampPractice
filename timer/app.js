var express = require('express'),
    app = express(),
    path = require('path');
// ROUTE PATHS
var routes = require('./routes/index');

// View engines setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Static
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error with no stacktrace sent to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(3000);

console.log('The server is running at http://localhost:3000');