var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var indexRoute = require('./routes/index');
var checkRoute = require('./routes/check');
var usersRoute = require('./routes/users');
var contentRoute = require('./routes/content');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('html'));

app.use('/', indexRoute);
app.use('/success', checkRoute);
app.use('/users', usersRoute);
app.use('/content', contentRoute);

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


module.exports = app;
