var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lessonSchema = new Schema({
  title: String,
  content: [String]
  // to be determined
});

var Lesson = mongoose.model('Lesson', lessonSchema);
module.exports = Lesson;
