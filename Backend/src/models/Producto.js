const { Schema, model } = require('mongoose');

const ProductoSchema = new Schema({
  nombre: String,
  categoria: String,
  subcategoria: String,
  tipo_producto: {
    type: String,
    enum: ['preparado', 'materia_prima']
  },
  descripcion: String,
  precio: Number,
  stock: {
    sucursal_centro: Number,
    sucursal_norte: Number
  },
  multimedia: {
    fotos_exterior: [String]
  },
  ficha_sensorial: {
    dulzor: Number,
    alergenos: [String]
  },
  personalizable: {
    permite_mensaje: Boolean,
    rellenos_disponibles: [String],
    coberturas_disponibles: [String]
  },
  tags: [String]
});

module.exports = model('Producto', ProductoSchema);