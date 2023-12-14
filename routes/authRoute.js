const express = require('express');
const { userRegister, logIn } = require('../controller/authController');
const router = express.Router();

router.post('/register', userRegister);

router.post('/login', logIn);

module.exports = router;
