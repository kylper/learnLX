var express = require('express');
var router = express.Router();

/*
- IF POSTing phrases, replace all matched words with their ID number
- If GETting phrases, replace all ids with appropriate word
*/

// Level 1 - User, Level 2 - Moderator, Level 3 - Administrator
/* Words */
router.get('/content/words', function(req, res, next) {
  // Render JSON full list of words and matching IDs
});

router.get('/content/words/:id', function(req, res, next) {
  // Render JSON with content of specific word
  // Sends links to word, audio, video, picture, etc.
});

// Requires authentication
router.post('/content/words', function(req, res, next) {
  // Checks proper authentication of level 2
  // Generate a new contentID
  // Verify content of JSON post matches mongoose schema
  // if verified, save to mongoDB
  // if unverified, return an error code (invalid field).
});

// Requires authentication
router.put('/content/words/:id', function(req, res, next) {
  // Checks proper authentication of level 2
  // Checks content to see what is being updated (audio field, video field, content field, etc.)
  // Verifies validity to match schema
  // if verified, Updates code and pushes new content back to mongodb
  // if unverified, return an error code (Invalid field).
});

// Requires authentication
router.delete('/content/words/:id', function(req, res, next) {
  // Checks proper authentication of level 3
  // Removes word entry matching that id
});

// Requires authentication
router.post('/content/words', function(req, res, next) {
  // Checks proper authentication of level 3
  // uploads a Comma Separated Value(csv), XML, or JSON document
  // converts all content to JSON objects
  // verifies to Mongoose schema
  // if verified - assign objectIDs to all the added words and add words to mongoDB
  // if unverified - return an error code (invalid fields in document).
});


/* Phrases */
router.get('/content/phrases', function(req, res, next) {
  // Render JSON full list of phrases and matching IDs
});

router.get('/content/phrases/:id', function(req, res, next) {
  // Render JSON with content of specific phrase
  // Renders words with corresponding ids and shows popups with appropriate photo or accompanying audio
});

// Requires authentication
router.post('/content/words', function(req, res, next) {
  // Checks proper authentication of level 3
  // uploads a Comma Separated Value(csv), XML, or JSON document
  // converts all content to JSON objects
  // verifies to Mongoose schema
  // if verified - assign objectIDs to all the added phrases, parse words to appropriate IDs, separated into an individual word array, and add phrases to mongoDB
  // if unverified - return an error code (invalid fields in document).
});

module.exports = router;
