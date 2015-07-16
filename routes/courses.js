var express = require('express');
var passport = require('passport');
var router = express.Router();

var Course = require('../models/course.js');

/* Course Lesson Details */
router.get('/id/:uuid/:unit/:lesson', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development.", "resource": "Details course lesson (using uuid)." });
});

router.get('/name/:name/:unit/:lesson', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development.", "resource": "Details course lesson (using name)." });
});

/* Course Unit Details */
router.get('/id/:uuid/:unit', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development.", "resource": "Details course unit (using uuid). Lists all lessons in unit." });
});

router.get('/name/:name/:unit', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development.", "resource": "Details course unit (using name). Lists all lessons in unit." });
});

/* Full Course Details */
router.get('/id/:uuid', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development.", "resource": "List course details (using uuid). Lists all units and lessons." });
});

router.get('/name/:name', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development.", "resource": "List course details (using name). Lists all units and lessons." });
});

/* Update Full Course details */
router.put('/id/:uuid', function(req, res, next){
  res.status(501);
  res.json({ message: 'Function under development.' });
});

router.put('/name/:name', function(req, res, next){
  res.status(501);
  res.json({ message: 'Function under development.' });
});

/* List all courses with details */
router.get('/list', function(req, res, next) {
  res.status(501);
  res.json([
    {
      "message": "Function under development.",
      "resource": "List all courses."
    },
    {
      "id": "5662342",
      "name": "Javascript",
      "active_users": "563"
    },
    {
      "id": "5662343",
      "name": "Ruby",
      "active_users": "7811"
    },
    {
      "id": "5662342",
      "name": "Python",
      "active_users": "1201"
    }
  ]);
});

router.post('/new', function(req, res, next) {
  res.status(501);
  res.json({
      "message": "Function under development.",
      "resource": "/new "
    });
});

/* router.get('/', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development." });
}); */

module.exports = router;
