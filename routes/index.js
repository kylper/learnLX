var express = require('express');
var passport = require('passport');
var fcts = require('../routes/functions');
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

router.get('/brew/:index', function(req, res, next) {
  if (fcts.toCap(req.params.index) === "Tea"){
    res.status(403);
    res.json({ message: "You are forbidden from making tea." });
  } else {
    res.status(418);
    res.json({ message: "Teapots are unable to make "+ req.params.index +"." });
  }
});

module.exports = router;
