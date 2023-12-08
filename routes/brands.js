// routes/brands.js
const express = require('express');
const router = express.Router();
const BrandController = require('../controllers/BrandController');

// Rutas para marcas
router.post('/', BrandController.createBrand);

module.exports = router;
