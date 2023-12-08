// controllers/TypeController.js
const Type = require('../models/Type');

const createType = async (req, res) => {
  try {
    const { nombre, estado } = req.body;
    const type = new Type({ nombre, estado });

    await type.save();

    res.status(201).json({ message: 'Tipo de equipo creado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el tipo de equipo' });
  }
};

module.exports = { createType };
