var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var skillSchema = new Schema({
  id: Number,
  words: [String],
  phrases: [String]
});

module.exports = mongoose.model('Skill', skillSchema);
