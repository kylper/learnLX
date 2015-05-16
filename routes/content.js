var express = require('express');
var router = express.Router();

var Word = require('../models/wordContent');
var Phrase = require('../models/phraseContent');

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
  Word.findOne({ id: req.params.id }, function(err, theWord){
    if (!err){
      res.status(200);
      return res.json(theWord);
    } else if (theWord == ""){
      res.status(404);
      res.json ({ "message": "The word could not be found." });
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
router.post('/words/bulkadd', function(req, res, next) {
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
  var response = {};
  var newWordContent = {};
  var id = 1;

  Word.count({}, function(err, count){
    id = count+1;
    console.log( "Current Count of Words in DB: ", count+1 );
  });

  newWordContent = {
    "id" : id,
    "native": pd.native,
    "translation": pd.translation,
    "pictureLocation": pd.pictureLocation,
    "audioLocation": pd.audioLocation,
    "videoLocation": pd.videoLocation
  }

  if (!pd.native || !pd.translation){
    res.status(400);
    newWordContent = null;
    response = { "message": "Required field is missing.", "status": 400 };
  } else {
    var addition = new Word(newWordContent);
    response = { "message": "Success, "+ pd.native +" has been added to ID number: "+ id +".", "status": 201 };
  }

  res.status(response.status);
  res.json({ "message": response.message });
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
  res.status(501);
  res.json({ message: "Function under development." });
  // Checks proper authentication of level 3
  // Removes word entry matching that id
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
