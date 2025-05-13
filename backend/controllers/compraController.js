const Compra = require('../models/Compra');

// Crear nueva compra
const crearCompra = async (req, res) => {
  const { producto, tarjeta, direccion } = req.body;

  try {
    // Verificar si ya se compró el producto
    const yaComprado = await Compra.findOne({ producto });
    if (yaComprado) {
      return res.status(400).json({ message: 'Este producto ya ha sido comprado y no está disponible.' });
    }

    // Guardar nueva compra
    const nuevaCompra = new Compra({ producto, tarjeta, direccion });
    await nuevaCompra.save();
    res.status(201).json({ message: 'Compra registrada con éxito', compra: nuevaCompra });

  } catch (error) {
    res.status(500).json({ message: 'Error al registrar la compra', error });
  }
};


// Obtener todas las compras
const obtenerCompras = async (req, res) => {
  try {
    const compras = await Compra.find();
    res.status(200).json(compras);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener compras', error });
  }
};

// Eliminar una compra por ID
const eliminarCompra = async (req, res) => {
  try {
    const compraEliminada = await Compra.findByIdAndDelete(req.params.id);
    if (!compraEliminada) {
      return res.status(404).json({ message: 'Compra no encontrada' });
    }
    res.status(200).json({ message: 'Compra eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la compra', error });
  }
};

// Actualizar una compra por ID (opcional)
const actualizarCompra = async (req, res) => {
  try {
    const compraActualizada = await Compra.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!compraActualizada) {
      return res.status(404).json({ message: 'Compra no encontrada' });
    }
    res.status(200).json(compraActualizada);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la compra', error });
  }
};

module.exports = {
  crearCompra,
  obtenerCompras,
  eliminarCompra,
  actualizarCompra
};
