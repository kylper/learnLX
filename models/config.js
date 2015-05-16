var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var configSchema = new Schema({
  title: String,
  description: String,
  admins: [],
  moderators: [],
  languagecode: String,
  // needs to be an alpha 3 string.
  // add proficiency standard here.
  website: String
});

var Config = mongoose.model('Config', configSchema);

module.exports = Config;
