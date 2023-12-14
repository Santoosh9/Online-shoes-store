const express = require('express');
const { userRegister } = require('../controller/authController');
const router = express.Router();

router.post('/register', userRegister);

module.exports = router;
