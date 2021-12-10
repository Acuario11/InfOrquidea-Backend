'use strict'

var express = require('express');
var authcontroller = require('../controllers/auth');
var token = require('../helpers/token');

var application = express.Router();

//application.get('/pruebas-controlador', authcontroller.pruebas);


application.get('/controlador', token.validarTokenDeUsuario , authcontroller.pruebaController);

application.post('/auth/create', authcontroller.registrarUsuario);

application.post('/auth/login', authcontroller.validarPasswordDeUsuario);

application.get('/auth/all', authcontroller.findAllUsuarios);

module.exports = application;