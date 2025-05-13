const {
  crearCompra,
  obtenerCompras,      // ← ¡ESTA línea es la que falta!
  eliminarCompra,
  actualizarCompra
} = require('../controllers/compraController');

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

router.get('/', obtenerCompras);

module.exports = router;