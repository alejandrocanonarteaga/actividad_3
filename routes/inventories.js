// routes/inventories.js
const express = require('express');
const router = express.Router();
const InventoryController = require('../controllers/InventoryController');
const { requireAuth } = require('../middleware/auth');

// Rutas para inventarios (protegidas por autenticación)
router.get('/', requireAuth, InventoryController.getAllInventories);

module.exports = router;
