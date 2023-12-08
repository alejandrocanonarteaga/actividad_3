// controllers/StateController.js
const State = require('../models/State');

const createState = async (req, res) => {
  try {
    const { nombre, estado } = req.body;
    const state = new State({ nombre, estado });

    await state.save();

    res.status(201).json({ message: 'Estado creado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el estado' });
  }
};

module.exports = { createState };
