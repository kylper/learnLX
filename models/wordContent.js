var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var wordSchema = new Schema({
  id: Number,
  native: String,
  translation: String,
  image: { type: String, lowercase: true },
  audio: { type: String, lowercase: true },
  video: { type: String, lowercase: true }
});

var Word = mongoose.model('Word', wordSchema);

/* Word.schema.path('color').validate(function (value) {
  return /blue|green|white|red|orange|periwinkle/i.test(value);
}, 'Invalid color'); -- THIS IS FOR VALIDATION -- */

module.exports = Word;
