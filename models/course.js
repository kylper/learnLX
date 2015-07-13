var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lessonSchema = new Schema({

});

var unitSchema = new Schema({

});

var courseSchema = new Schema({
  id: Number,
  

});

var Skill = mongoose.model('Skill', skillSchema);
module.exports = Skill;
