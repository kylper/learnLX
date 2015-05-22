var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var skillInfoSchema = new Schema({
  title: String,
  content: [String]
  // to be determined
});

var SkillInfo = mongoose.model('SkillInfo', skillInfoSchema);
module.exports = SkillInfo;
