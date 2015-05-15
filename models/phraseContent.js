var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var phraseSchema = new Schema({
  id: ObjectId,
  content: [String]
});

module.exports = mongoose.model('Phrase', phraseSchema);
