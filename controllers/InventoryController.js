// controllers/InventoryController.js
const Inventory = require('../models/Inventory');

const getAllInventories = async (req, res) => {
  try {
    const inventories = await Inventory.find();
    res.json(inventories);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los inventarios' });
  }
};

module.exports = { getAllInventories };
