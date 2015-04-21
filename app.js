var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var data = require('./routes/data');
var storing = require('./routes/storing');
var stormpath = require('express-stormpath');

var app = express();

app.use(stormpath.init(app, {
  apiKeyFile: path.join(__dirname, 'bin/apiKey-9SXXT8CBH3GWZI98G276AAG0X.properties'),
  application: 'https://api.stormpath.com/v1/applications/35atKZAXw3i3MVhHOwzLIG',
  secretKey: 'some_long_random_string',
  enableUsername: true,
  requireUsername: true,
  expandCustomData: true,
  enableForgotPassword: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', stormpath.loginRequired, function(req, res) {
  res.render('index', {user: req.user})
})
app.use('/data', stormpath.loginRequired, data);
app.use('/storing', stormpath.loginRequired, storing);

app.use(function(req, res, next) {  
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
