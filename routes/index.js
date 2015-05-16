var express = require('express');
var passport = require('passport');
var router = express.Router();

// ======== Other Pages ================

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
  res.redirect('/users/' + req.user.username);
});

router.post('/register',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
  res.redirect('/users/' + req.user.username);
});

router.get('/', function(req, res, next) {
  res.sendFile('./html/index.html');
});

module.exports = router;
