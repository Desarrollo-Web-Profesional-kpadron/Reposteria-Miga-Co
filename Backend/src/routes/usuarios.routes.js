const router = require('express').Router();
const Usuario = require('../models/Usuario');

router.post('/', async (req, res) => {
  const usuario = await Usuario.create(req.body);
  res.json(usuario);
});

router.get('/', async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

module.exports = router;