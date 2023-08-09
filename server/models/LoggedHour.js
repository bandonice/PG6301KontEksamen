// server/models/LoggedHour.js
const mongoose = require('mongoose');

const loggedHourSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  activity: { type: mongoose.Schema.Types.ObjectId, ref: 'Activity' },
  hours: Number,
});

const LoggedHour = mongoose.model('LoggedHour', loggedHourSchema);

module.exports = LoggedHour;
