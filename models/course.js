var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var evalData = {
  exists: Boolean,
  fileLocation: String,
  assetsLocation: String
};

var lessonSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  content: String
});

var unitSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  description: String,
  lessons: [ Schema.Types.ObjectId ],
  eval: evalData
});

var courseSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  description: String,
  languages: [ String ],
  platforms: [ String ],
  units: [ Schema.Types.ObjectId ],
  studentCount: Number
});

var Course = mongoose.model('Course', courseSchema);
module.exports = Course;
