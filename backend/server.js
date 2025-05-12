const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./config/db');
const subscriberRoutes = require('./routes/subscriberRoutes');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const compraRoutes = require('./routes/compraRoutes');
const cors = require('cors');

app.use(cors());

dotenv.config();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/subscribers', subscriberRoutes);


app.use('/api/compras', compraRoutes);


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Error conectando a MongoDB:', err);
});
