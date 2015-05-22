var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var phrase = require('../../models/phraseContent');

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
