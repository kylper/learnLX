var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var evalSchema = new Schema({
  exists: Boolean,
  fileLocation: String,
  assetsLocation: String
});

var lessonSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  content: String, // This will be a markdown document in the form of a link learnlx.com/public/course-assets/coursename-unitid-lessonid
});

var unitSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  description: String,
  lessons: [ lessonSchema ],
  eval: evalSchema
});

var courseSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  description: String,
  languages: String,
  platforms: String,
  units: [ unitSchema ],
  studentCount: Number
});

var Course = mongoose.model('Course', courseSchema);
module.exports = Course;
