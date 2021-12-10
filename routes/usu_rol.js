'use strict'

var express = require('express');
var usu_rolcontroller = require('../controllers/usu_rol');

var application = express.Router();

application.post('/usu_rol/create', usu_rolcontroller.createUsu_rol);

application.put('/usu_rol/edit', usu_rolcontroller.updateUsu_rol);

application.delete('/usu_rol/delete', usu_rolcontroller.deleteUsu_rol);

application.get('/usu_rol/all', usu_rolcontroller.findAllUsu_rol);

application.get('/usu_rol/:id', usu_rolcontroller.findByIdUsu_rol);

application.get('/usu_rol/usu/:usuarioId', usu_rolcontroller.findRolByUsuId);

module.exports = application;
