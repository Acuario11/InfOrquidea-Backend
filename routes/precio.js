'use strict'

var express = require('express');
var preciocontroller = require('../controllers/precio');

var application = express.Router();

application.post('/precio/create', preciocontroller.createPrecio);

application.put('/precio/edit', preciocontroller.updatePrecio);

application.delete('/precio/delete', preciocontroller.deletePrecio);

application.get('/precio/all', preciocontroller.findAllPrecio);

application.get('/precio/:id', preciocontroller.findByIdPrecio);

module.exports = application;
