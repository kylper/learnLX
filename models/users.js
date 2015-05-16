var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  id: Number,
  name: String,
  username: String,
  password: String /* this is a sick joke, don't worry */
});

var User = mongoose.model('User', userSchema);

module.exports = User;
