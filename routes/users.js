// routes/users.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Rutas para usuarios
router.post('/register', UserController.createUser);
router.post('/login', UserController.loginUser);

module.exports = router;
