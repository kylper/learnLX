var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var phraseSchema = new Schema({
  id: Number,
  content: [String]
});

var Phrase = mongoose.model('Phrase', phraseSchema);

module.exports = Phrase;
