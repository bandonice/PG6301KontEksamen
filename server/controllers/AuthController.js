// server/controllers/AuthController.js
const Employee = require('../models/Employee');
const Manager = require('../models/Manager');

// Employee login
exports.employeeLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const employee = await Employee.findOne({ username, password });
    if (employee) {
      res.json({ message: 'Employee login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error during login' });
  }
};

// Manager login
exports.managerLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const manager = await Manager.findOne({ username, password });
    if (manager) {
      res.json({ message: 'Manager login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error during login' });
  }
};
