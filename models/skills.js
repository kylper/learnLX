var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var skillSchema = new Schema({
  id: Number,
  words: [String],
  phrases: [String],
  info: [String]
});

var Skill = mongoose.model('Skill', skillSchema);
module.exports = Skill;
