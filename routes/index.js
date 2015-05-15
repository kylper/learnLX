var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello! This is a learnLX server! To use it properly, please go to (website)! \n
  For more info, go here! http://github.com/varNinja/learnLX \n
  Thanks!');
});

module.exports = router;
