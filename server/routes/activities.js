const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/ActivityController');

router.get('/activities', ActivityController.getAllActivities);

router.post('/activities', ActivityController.createActivity, (req, res) => {
    console.log('Received request to create activity:', req.body);
});

router.put('/activities/:id', ActivityController.editActivity);

router.delete('/activities/:id', ActivityController.deleteActivity);

module.exports = router;
