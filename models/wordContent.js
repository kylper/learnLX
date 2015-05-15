var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var wordSchema = new Schema({
  id: ObjectId,
  content: String,
  pictureLocation: String,
  audioLocation: String,
  videoLocation: String
});

module.exports = mongoose.model('Word', wordSchema);
