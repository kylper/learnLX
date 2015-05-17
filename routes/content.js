var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var word = require('../models/wordContent');
var phrase = mongoose.model('Phrase');

/*
- IF POSTing phrases, replace all matched words with their ID number
- If GETting phrases, replace all ids with appropriate word
*/

// Level 1 - User, Level 2 - Moderator, Level 3 - Administrator

router.get('/', function(req, res, next){
  res.status(404);
  res.json({ message: 'Please specify the content you want to see.' });
});

/* Words */
router.get('/words/:id', function(req, res, next) {
  word.findOne({ id: req.params.id }, function(err, theWord){
    if (theWord == null){
      res.status(404);
      res.json ({ "message": "The word could not be found." });
    } else if (!err){
      res.status(200);
      return res.json(theWord);
    } else {
      res.status(500);
      res.json ({ "message": err });
    }
  });
});

/* router.get('/words', function(req, res, next) {
  Word.findById(req.params.id, function(err, theWord){
    if (err){ return res.send(err); }
    res.json(theWord);
  });
}); */

// Requires authentication
router.post('/words/importlib', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development." });
  // Checks proper authentication of level 3
  // uploads a Comma Separated Value(csv), XML, or JSON document
  // converts all content to JSON objects
  // verifies to Mongoose schema
  // if verified - assign objectIDs to all the added words and add words to mongoDB
  // if unverified - return an error code (invalid fields in document).
});

// Requires authentication
router.post('/words', function(req, res, next) {
  var pd = req.body; // Posted Data
  var newWordContent;
  var id = 1;

  word.count({}, function(err, count){
    id = count+1;
    console.log( "Current Count of Words in DB: ", count );

    newWordContent = {
      "id" : id,
      "native": pd.native,
      "translation": pd.translation,
      "image": pd.image,
      "audio": pd.audio,
      "video": pd.video
    }

    if (!pd.native || !pd.translation){
      res.status(400);
      res.json({ "message": "Required field is missing." });
    } else if (err) {
      res.status(500);
      res.json({ "message": "An error occurred during word lookup." });
      console.log ("Error 500 occurred during word.count");
    } else {
      word.create (newWordContent, function(err, wordFinal) {
        if (err) {
          res.status(500);
          res.json({ "message": "An error occurred while saving new word." });
          console.log("Error 500 occured while creating word ", pd.native);
        } else {
          res.status(201);
          res.json({ "message": "Success, "+ wordFinal.native +" has been added.", "id": wordFinal.id });
          console.log( "Success: "+ wordFinal.native +" saved. New Count of Words in DB: ", id );
        }
      });
    }
  });
});

// Requires authentication
router.put('/words/:id', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development." });
  // Checks proper authentication of level 2
  // Checks content to see what is being updated (audio field, video field, content field, etc.)
  // Verifies validity to match schema
  // if verified, Updates code and pushes new content back to mongodb
  // if unverified, return an error code (Invalid field).
});

// Requires authentication
router.delete("/words/:id", function(req, res, next) {
  console.log("Attempting deletion of word.");
  word.findOne({ id: req.params.id }).remove(function(err, rmobj){
    res.status(204);
    // res.json({ "message": "Word successfully deleted!" });
    console.log(rmobj);
  });

});


/* Phrases */
router.get('/phrases/:id', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development." });
  // Render JSON with content of specific phrase
  // Renders words with corresponding ids and shows popups with appropriate photo or accompanying audio
});

router.get('/phrases', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development." });
  // Render JSON full list of phrases and matching IDs
});

// Requires authentication
router.post('/phrases/bulkadd', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development." });
  // Checks proper authentication of level 3
  // uploads a Comma Separated Value(csv), XML, or JSON document
  // converts all content to JSON objects
  // verifies to Mongoose schema
  // if verified - assign objectIDs to all the added phrases, parse words to appropriate IDs, separated into an individual word array, and add phrases to mongoDB
  // if unverified - return an error code (invalid fields in document).
});

// Requires authentication
router.post('/phrases', function(req, res, next) {
  res.status(501);
  res.json({ message: "Function under development." });
  // Checks proper authentication of level 2
  // Generate a new contentID
  // Verify content of JSON post matches mongoose schema
  // if verified, save to mongoDB
  // if unverified, return an error code (invalid field).
});

module.exports = router;
