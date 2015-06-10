var word = require('./skills/wordHandlers');
var phrase = require('./skills/phraseHandlers');
var lesson = require('./skills/lessonHandlers');

var SkillsModel = require('../models/skills');

var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

// This page will be used for the Skill Overview api
router.get('/', function(req, res, next){
  res.status(501);
  res.json({ message: "Function under development." });
});

module.exports = [ word, phrase, lesson, router ];
