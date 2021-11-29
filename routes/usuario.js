'use strict'

var express = require('express');
var usuariocontroller = require('../controllers/usuario');

var application = express.Router();

application.post('/usuario/create', usuariocontroller.createUsuario);

application.put('/usuario/edit', usuariocontroller.updateUsuario);

application.delete('/usuario/delete', usuariocontroller.deleteUsuario);

application.get('/usuario/all', usuariocontroller.findAllUsuario);

application.get('/usuario/:id', usuariocontroller.findByIdUsuario);

module.exports = application;
