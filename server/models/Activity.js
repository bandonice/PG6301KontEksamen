// server/models/Activity.js (or similar)
const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String, // Assuming department is a string
    required: true,
  },
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
