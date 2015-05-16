var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var mongoose = require('mongoose');

var indexRoute = require('./routes/index');
var checkRoute = require('./routes/check');
var usersRoute = require('./routes/users');
var contentRoute = require('./routes/content');

var app = express();

mongoose.connect('mongodb://localhost');

var dbc = mongoose.connection;
dbc.on('error', console.error.bind(console, 'connection error:'));
dbc.once('open', function (callback) {
  console.log("Mongoose connected! - for debugging only");
});

/* function ensureAuth(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  req.session.error = 'Please sign in!';
  res.redirect('/signin');
}*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('html'));
app.use(passport.initialize());
app.use(passport.session());

var sess = {
  secret: 'learnLX',
  resave: false,
  saveUninitialized: true,
  cookie: {}
};

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess));

app.use('/', indexRoute);
app.use('/success', checkRoute);
app.use('/users', usersRoute);
app.use('/content', contentRoute);

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
  res.redirect('/users/' + req.user.username);
});

// signup

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send(err.message);
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = app;
