const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  username: String,
  password: String, // Store the password as plain text
  refreshToken: String, // Store the refresh token
  // Other employee fields
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
