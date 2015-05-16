var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var phraseSchema = new Schema({
  id: Number,
  content: [String],
  translation: String,
  image: { type: String, lowercase: true },
  audio: { type: String, lowercase: true },
  video: { type: String, lowercase: true }
});

var Phrase = mongoose.model('Phrase', phraseSchema);

module.exports = Phrase;
