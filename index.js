// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Conectar a la base de datos MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());
app.use(cors()); // Habilitar CORS para permitir solicitudes desde cualquier origen

// Rutas
const usersRoutes = require('./routes/users');
const statesRoutes = require('./routes/states');
const brandsRoutes = require('./routes/brands');
const typesRoutes = require('./routes/types');
const inventoriesRoutes = require('./routes/inventories');

app.use('/users', usersRoutes);
app.use('/states', statesRoutes);
app.use('/brands', brandsRoutes);
app.use('/types', typesRoutes);
app.use('/inventories', inventoriesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
