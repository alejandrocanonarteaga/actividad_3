// routes/types.js
const express = require('express');
const router = express.Router();
const TypeController = require('../controllers/TypeController');

// Rutas para tipos de equipos
router.post('/', TypeController.createType);

module.exports = router;
