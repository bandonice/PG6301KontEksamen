const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Manager = mongoose.model('Manager', managerSchema);

module.exports = Manager;
