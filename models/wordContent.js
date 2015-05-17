var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wordSchema = new Schema({
  native: String,
  translation: String,
  image: { type: String },
  audio: { type: String },
  video: { type: String }
});

var Word = mongoose.model('Word', wordSchema);

/* Word.schema.path('color').validate(function (value) {
  return /blue|green|white|red|orange|periwinkle/i.test(value);
}, 'Invalid color'); -- THIS IS FOR VALIDATION -- */

module.exports = Word;
