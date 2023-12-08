// routes/states.js
const express = require('express');
const router = express.Router();
const StateController = require('../controllers/StateController');

// Rutas para estados
router.post('/', StateController.createState);

module.exports = router;
