require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const subscriberRoutes = require('./routes/subscriberRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB(); // Conectar a MongoDB

app.use(express.json());
app.use(express.static('public'));

app.use('/api/subscribers', subscriberRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
