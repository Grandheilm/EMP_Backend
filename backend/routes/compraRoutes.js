const express = require('express');
const router = express.Router();
const Compra = require('../models/compras');

router.post('/', async (req, res) => {
  try {
    const nuevaCompra = new Compra(req.body);
    await nuevaCompra.save();
    res.status(201).json({ message: 'Compra registrada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar la compra', error });
  }
});

module.exports = router;
