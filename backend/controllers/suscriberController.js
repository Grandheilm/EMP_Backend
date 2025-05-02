const Subscriber = require('../models/subscriber');

exports.createSubscriber = async (req, res) => {
  try {
    const { email } = req.body;
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.status(201).json({ message: 'Correo registrado exitosamente' });
  } catch (err) {
    if (err.code === 11000) {
      res.status(409).json({ message: 'Este correo ya está registrado' });
    } else {
      res.status(500).json({ message: 'Error al registrar correo', error: err });
    }
  }
};

exports.getSubscribers = async (req, res) => {
  try {
    const list = await Subscriber.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener correos', error: err });
  }
};
