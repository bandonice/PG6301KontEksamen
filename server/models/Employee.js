const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  username: String,
  password: String, 
  refreshToken: String, 
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
