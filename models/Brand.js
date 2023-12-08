// models/Brand.js
const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
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

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
