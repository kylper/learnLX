var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var lesson = require('../../models/lessonContent');

router.get('/lesson/:id', function(req, res, next) {
  lesson.findOne({ _id: req.params.id }, function(err, content){
    if (content == null){
      res.status(404);
      res.json ({ "message": "The lesson could not be found." });
    } else if (!err){
      res.status(200);
      return res.json(content);
    } else {
      res.status(500);
      res.json ({ "message": err });
    }
  });
});

router.get('/lesson', function(req, res, next) {
  lesson.find({}, function(err, objects) {
    var objMap = {};

    /*objects.forEach(function(content) {
      objMap[content._id] = content.native; // This needs work.
    });*/

    res.send(objMap);
  });
});

router.post('/lesson', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development." });
});

// Requires authentication
router.post('/lesson', function(req, res, next) {
  var pd = req.body; // Posted Data
  var newLessonContent;

  lesson.count({}, function(err, count){
    console.log( "Current Count of lesson in DB: ", count );

    newLessonContent = {
      "native" : pd.native,
      "translation" : pd.translation,
      "ipa" : pd.ipa,
      "image" : pd.image,
      "audio" : pd.audio,
      "video" : pd.video
    }

    if (!pd.native || !pd.translation){ // needs work.
      res.status(400);
      res.json({ "message": "Required field is missing." });
    } else if (err) {
      res.status(500);
      res.json({ "message": "An error occurred during word lookup." });
      console.log ("Error 500 occurred during word.count");
    } else {
      lesson.create (newLessonContent, function(err, lessonFinal) {
        if (err) {
          res.status(500);
          res.json({ "message": "An error occurred while saving new word." });
          console.log("Error 500 occured while creating word ", pd.native);
        } else {
          res.status(201);
          res.json({ "message": "Success, "+ lessonFinal.native +" has been added.", "id": lessonFinal._id });
          console.log( "Success: "+ lessonFinal.native +" saved. New Count of Words in DB: ", count+1 );
        }
      });
    }
  });
});

router.put('/lesson', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development." });
});

router.delete('/lesson', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development." });
});

module.exports = router;
