var express = require('express');
var passport = require('passport');
var router = express.Router();

// ======== Other Pages ================
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: __dirname + '/../html/' });
});

router.get('/help', function(req, res, next) {
  res.sendFile('api.html', { root: __dirname + '/../html/' });
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
