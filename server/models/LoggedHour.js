const mongoose = require('mongoose');

const loggedHourSchema = new mongoose.Schema({
  name: String,
  department: String,
  loggedHours: Number,
});

const LoggedHour = mongoose.model('LoggedHour', loggedHourSchema);

module.exports = LoggedHour;
