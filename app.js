// ======== Packages! ===================
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;

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

mongoose.connection.on('error', console.error.bind(console, 'Connection Error with Mongoose. '));
mongoose.connection.once('open', function(callback){ console.log("Successful Connection with Mongoose!"); });

// ======== DB Models ===================
var Word = require('./models/wordContent');
var Phrase = require('./models/phraseContent');
var User = require('./models/users');

// ======== Routes! =====================
var indexRoute = require('./routes/index');
var checkRoute = require('./routes/check');
var usersRoute = require('./routes/users');
var contentRoute = require('./routes/content');
var authRoute = require('./routes/authentication');

app.use('/check', checkRoute);
app.use('/users', usersRoute);
app.use('/content', contentRoute);
app.use('/', indexRoute);

// ======== Authentication ===============
passport.use(new LocalStrategy(User.authenticate()));

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
console.log('learnLX initiated at: '+ config.basesite +':' + port);

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
