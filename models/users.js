var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  email: String,
  role: String,
  languages: [ String ],
  created: { type: Date, default: Date.now }
});

userSchema.plugin(passportLocalMongoose);
var User = mongoose.model('User', userSchema);
module.exports = User;
