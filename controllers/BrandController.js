// controllers/BrandController.js
const Brand = require('../models/Brand');

const createBrand = async (req, res) => {
  try {
    const { nombre, estado } = req.body;
    const brand = new Brand({ nombre, estado });

    await brand.save();

    res.status(201).json({ message: 'Marca creada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la marca' });
  }
};

module.exports = { createBrand };
