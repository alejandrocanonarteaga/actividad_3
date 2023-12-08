// models/State.js
const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
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

const State = mongoose.model('State', stateSchema);

module.exports = State;
