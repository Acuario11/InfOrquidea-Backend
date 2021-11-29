'use strict'

var express = require('express');
var compracontroller = require('../controllers/compra');

var application = express.Router();

application.post('/compra/create', compracontroller.createCompra);

application.put('/compra/edit', compracontroller.updateCompra);

application.delete('/compra/delete', compracontroller.deleteCompra);

application.get('/compra/all', compracontroller.findAllCompra);

application.get('/compra/:id', compracontroller.findByIdCompra);

module.exports = application;
