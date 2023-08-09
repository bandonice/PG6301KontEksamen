const express = require('express');
const router = express.Router();
const LoggedHoursController = require('../controllers/LoggedHoursController');

router.get('/loggedhours', LoggedHoursController.getAllLoggedHours);

router.post('/loggedhours', LoggedHoursController.createLoggedHour);

module.exports = router;
