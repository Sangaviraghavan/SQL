const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/create', userController.createUser);
router.get('/getid', userController.getUserById);
router.get('/all', userController.getAllUsers);

module.exports = router;