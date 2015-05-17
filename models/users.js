var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
  id: Number,
  name: String,
  email: String,
  admin: Boolean,
  moderator: Boolean,
  created: { type: Date, default: Date.now }
});

userSchema.plugin(passportLocalMongoose);
var User = mongoose.model('User', userSchema);
module.exports = User;
