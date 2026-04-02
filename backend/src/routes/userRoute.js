const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// 주소: http://localhost:5000/api/users/test
router.get('/test', userController.testUser);

module.exports = router;