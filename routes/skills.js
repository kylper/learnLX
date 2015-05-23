var word = require('./skills/wordHandlers');
var phrase = require('./skills/phraseHandlers');
var info = require('./skills/infoHandlers');

var SkillsModel = require('../models/skills');

var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

// Import express and router
// Import skills model
// This page will be used for the Skill Overview api

router.get('/', function(req, res, next){
  res.status(501);
  res.json({ message: "Function under development." });
});

module.exports = router, word, phrase, info;
