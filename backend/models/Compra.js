const mongoose = require('mongoose');

const compraSchema = new mongoose.Schema({
  producto: String,
  tarjeta: String,
  direccion: String,
  fecha: {
    type: Date,
    default: Date.now
  }
});

// Usamos 'compras' como nombre de la colección
module.exports = mongoose.model('Compra', compraSchema, 'compras');
