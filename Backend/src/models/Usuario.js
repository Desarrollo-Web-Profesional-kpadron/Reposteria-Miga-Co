const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
  nombre: String,
  email: { type: String, unique: true },
  password_hash: String,
  perfil: {
    direcciones: [
      {
        etiqueta: String,
        calle: String,
        referencias: String
      }
    ]
  },
  fecha_registro: {
    type: Date,
    default: Date.now
  }
});

module.exports = model('Usuario', UsuarioSchema);