var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  username: String,
  password: String /* this is a sick joke, don't worry */
});

module.exports = mongoose.model('User', userSchema);
