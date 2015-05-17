var express = require('express');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var fcts = require('../routes/functions');
var router = express.Router();

// ======== Auth Pages =================
router.post('/auth/login', passport.authenticate('local', { session: false }), function(req, res) {
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

router.post('/auth/register',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
  res.redirect('/users/' + req.user.username);
});

// ======== Other Pages ================
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
