// server/controllers/ActivityController.js
const LoggedHour = require('../models/LoggedHour');

// Get all activities
exports.getAllLoggedHours = async (req, res) => {
  try {
    const loggedHours = await LoggedHour.find();
    res.json(loggedHours);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching logged hours' });
  }
};

// Create a new logged hour entry
exports.createLoggedHour = async (req, res) => {
    const { name, department, loggedHours } = req.body; // Destructure all needed fields
    try {
      const newLoggedHour = new LoggedHour({ name, department, loggedHours }); // Use the destructured fields
      await newLoggedHour.save();
      res.json({ message: 'New logged hour created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating logged hour entry' });
    }
  };
  

