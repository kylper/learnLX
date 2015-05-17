// ======== Packages! ===================
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

// ======== Configuration ===============
var app = express();
var config = require('./config');

var port = config.port || 80;
// var port = process.env.PORT || 80; // <-- for using an environment variable port#
mongoose.connect(config.database);
app.set('appSecret', config.secret);
app.use(morgan(config.logging));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('html'));
app.use(passport.initialize());
app.use(passport.session());

// temporary config
mongoose.connection.on('error', console.error.bind(console, 'Connection Error with Mongoose: '));
mongoose.connection.once('open', function(callback){ console.log("Successful Connection with Mongoose!"); });

// ======== Models ======================
var Word = require('./models/wordContent');
var Phrase = require('./models/phraseContent');


// ======== Routes! =====================
var indexRoute = require('./routes/index');
var checkRoute = require('./routes/check');
var usersRoute = require('./routes/users');
var contentRoute = require('./routes/content');

app.use('/check', checkRoute);
app.use('/users', usersRoute);
app.use('/content', contentRoute);
app.use('/', indexRoute);

// ======== Error Handling  ==============

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        // res.send(err.message); // for testing purposes
        res.json({ message: err.message });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ message: err.message });
});

// ======== App Start! ===================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);

// ======== App End ========================
process.on('SIGINT', function() {
  console.log('Goodbye! :)');
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

// And finally, to share this document with the rest of the project
module.exports = app;
