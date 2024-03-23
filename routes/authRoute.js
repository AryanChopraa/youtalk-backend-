const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.Login);
router.post('/signup', authController.Signup);

module.exports = router;
