var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

/* This is included for testing purposes.
 * It will not be available in the final version of learnLX, unfortunately.
 */
router.get('/brew/:index', function(req, res, next) {
  if ( req.params.index.toUpperCase() === "TEA" ){
    res.status(403);
    res.json({ message: "You are forbidden from making tea." });
  } else {
    res.status(418);
    res.json({ message: "Teapots are unable to make "+ req.params.index +"." });
  }
});

router.get('/', function(req, res, next){
  // SEND index.html
  res.sendFile('index.html', { root: __dirname + '/../views/' });
});

module.exports = [ router ];
