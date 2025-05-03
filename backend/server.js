const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./config/db');
const subscriberRoutes = require('./routes/subscriberRoutes');

const path = require('path');

dotenv.config();

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/subscribers', subscriberRoutes);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Error conectando a MongoDB:', err);
});
