const Activity = require('../models/Activity');

exports.getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching activities' });
  }
};

exports.createActivity = async (req, res) => {
  const { name, department } = req.body;
  try {
    const newActivity = new Activity({ name, department });
    await newActivity.save();
    res.json({ message: 'Activity created successfully' });
  } catch (error) {
    console.error('Error creating activity:', error);
    res.status(500).json({ message: `Error creating activity: ${error.message}` });
  }
  
};

exports.editActivity = async (req, res) => {
  const activityId = req.params.id;
  const { name, department } = req.body;
  try {
    const updatedActivity = await Activity.findByIdAndUpdate(
      activityId,
      { name, department },
      { new: true } 
    );
    res.json(updatedActivity);
  } catch (error) {
    res.status(500).json({ message: 'Error updating activity' });
  }
};


exports.deleteActivity = async (req, res) => {
  const activityId = req.params.id;
  try {
    await Activity.findByIdAndDelete(activityId);
    res.json({ message: 'Activity deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting activity' });
  }
};
