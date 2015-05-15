var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var contentSchema = new Schema({
  id: ObjectId,
  contentType: String,
  content: String,
  pictureLocation: String,
  audioLocation: String,
  videoLocation: String
});

module.exports = mongoose.model('Content', contentSchema);
