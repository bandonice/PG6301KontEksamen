const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

router.post('/employee/login', AuthController.employeeLogin);

router.post('/manager/login', AuthController.managerLogin);

module.exports = router;
