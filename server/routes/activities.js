// server/routes/activities.js
const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/ActivityController');

// Get all activities
router.get('/activities', ActivityController.getAllActivities);

// Create a new activity
router.post('/activities', ActivityController.createActivity);

// Edit an existing activity
router.put('/activities/:id', ActivityController.editActivity);

// Delete an activity
router.delete('/activities/:id', ActivityController.deleteActivity);

module.exports = router;
