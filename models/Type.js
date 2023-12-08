// models/Type.js
const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now
  }
});

const Type = mongoose.model('Type', typeSchema);

module.exports = Type;
