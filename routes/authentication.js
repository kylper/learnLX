var express = require('express');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

// ======== Auth Pages =================
router.post('/login', passport.authenticate('local', { session: false }), function(req, res) {
  var token = jwt.sign(user, app.get('appSecret'), {
    expiresInMinutes: 720 // expires in 12 hours
  });
  // return the information including token as JSON
  res.json({
    success: true,
    message: 'Use this token to authenticate. It will expire when revoked (logging out) or in 12 hours.',
    token: token
  });
  // res.redirect('/users/' + req.user.username);
});

router.post('/register',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
  res.redirect('/users/' + req.user.username);
});

module.exports = router;
