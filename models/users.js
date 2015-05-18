var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

// Language and Proficiency Level Sub-document
// lang - Language (ISO 639 Alpha 3 code - eng, fra, etc.)
// code - Proficiency Level (A1, B2, C2, etc.)
// comski - Completed Skills (Basic Vocab, etc.)
// proski - In-Progress Skill (Vocab Unit 2)
var langSchema = new Schema({
  lang: String,
  code: String,
  comski: [String],
  proski: String,
});

var userSchema = new Schema({
  id: Number,
  name: String,
  email: String,
  admin: Boolean,
  moderator: Boolean,
  languages: [langSchema],
  created: { type: Date, default: Date.now },
});

userSchema.plugin(passportLocalMongoose);
var User = mongoose.model('User', userSchema);
module.exports = User;
