const express = require('express');
const router = express.Router();
const { updateName, changePassword } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.put('/update-name', authMiddleware, updateName);
router.put('/change-password', authMiddleware, changePassword);

module.exports = router;
