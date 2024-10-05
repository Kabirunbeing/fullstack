const express = require('express');
const { getUsers, createUser } = require('../controllers/userController');
const router = express.Router();

router.get('/', getUsers);        // GET /api/users - Get all users
router.post('/', createUser);     // POST /api/users - Create a new user

module.exports = router;
