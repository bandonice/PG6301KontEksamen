// server/models/Manager.js
const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
  username: String,
  password: String,
  // Add other manager fields as needed
});

const Manager = mongoose.model('Manager', managerSchema);

module.exports = Manager;
