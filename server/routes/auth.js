// server/routes/auth.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

// Employee login route
router.post('/employee/login', AuthController.employeeLogin);

// Manager login route
router.post('/manager/login', AuthController.managerLogin);

module.exports = router;
