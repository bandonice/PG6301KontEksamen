// server/models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  username: String,
  password: String,
  // Other employee fields
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
