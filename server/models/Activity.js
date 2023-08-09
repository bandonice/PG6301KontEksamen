// server/models/Activity.js
const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: String,
  // Add other activity fields as needed
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
