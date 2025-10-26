const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const {login,signup}=require('../controllers/userController');

// User signup
router.post('/signup', signup);

// User login
// router.post('/login', login);

module.exports = router;