var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var phraseSchema = new Schema({
  id: ObjectId,
  content: [String]
});

var Phrase = mongoose.model('Phrase', phraseSchema);

module.exports = Phrase;
