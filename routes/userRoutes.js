const express = require('express');
const router = express.Router();

const {createUser, getAllUsers, getUserById, deleteUserById} = require('../controllers/userController');

router.post('/', createUser);
router.get('/' , getAllUsers);
router.get('/:id' , getUserById);
router.delete('/:id' , deleteUserById);

module.exports = router;