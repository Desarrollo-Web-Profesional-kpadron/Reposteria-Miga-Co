const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuarios.routes');

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/usuarios', usuarioRoutes);
//app.use('/api/productos', require('./routes/productos.routes'));
//app.use('/api/pedidos', require('./routes/pedidos.routes'));

module.exports = app;