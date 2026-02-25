const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/usuarios', require('./routes/usuarios.routes'));
//app.use('/api/productos', require('./routes/productos.routes'));
//app.use('/api/pedidos', require('./routes/pedidos.routes'));

module.exports = app;