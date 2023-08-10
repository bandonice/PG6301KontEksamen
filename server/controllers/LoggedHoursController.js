const LoggedHour = require('../models/LoggedHour');

exports.getAllLoggedHours = async (req, res) => {
  try {
    const loggedHours = await LoggedHour.find();
    res.json(loggedHours);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching logged hours' });
  }
};

exports.createLoggedHour = async (req, res) => {
    const { name, department, loggedHours } = req.body; 
    try {
      const newLoggedHour = new LoggedHour({ name, department, loggedHours }); 
      await newLoggedHour.save();
      res.json({ message: 'New logged hour created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating logged hour entry' });
    }
  };
  

