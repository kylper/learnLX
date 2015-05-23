var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

router.get('/info', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development." });
});

router.get('/info/:id', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development." });
});

router.post('/info', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development." });
});

router.put('/info', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development." });
});

router.delete('/info', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development." });
});

module.exports = router;
