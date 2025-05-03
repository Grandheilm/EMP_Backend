const mongoose = require('mongoose');

const connectDB = async () => {
  console.log(' URI leída:', process.env.MONGO_URI);  // ← línea de depuración
  try {
    await mongoose.connect(process.env.MONGO_URI);;
    console.log(' MongoDB conectado');
  } catch (err) {
    console.error(' Error conectando a MongoDB:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
