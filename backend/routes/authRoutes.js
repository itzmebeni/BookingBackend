const express = require('express');
const router = express.Router();
const { register, login, googleAuth } = require('../controllers/authController');

router.post('/signup', register);
router.post('/login', login);
router.post('/google', googleAuth); // For Google login/signup
router.post('/google-login', loginWithGoogle);


module.exports = router;
