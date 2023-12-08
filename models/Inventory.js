// models/Inventory.js
const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  serial: {
    type: String,
    unique: true,
    required: true
  },
  modelo: {
    type: String,
    unique: true,
    required: true
  },
  descripcion: String,
  color: String,
  fechaCompra: {
    type: Date,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  usuarioACargo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  marca: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
    required: true
  },
  estadoEquipo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'State',
    required: true
  },
  tipoEquipo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Type',
    required: true
  }
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
