var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var phraseSchema = new Schema({
  native: [String],
  translation: String,
  image: { type: String, lowercase: true },
  audio: { type: String, lowercase: true },
  video: { type: String, lowercase: true }
});

var Phrase = mongoose.model('Phrase', phraseSchema);

module.exports = Phrase;
