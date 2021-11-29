'use strict'

var express = require('express');
var vivero_orquideacontroller = require('../controllers/vivero_orquidea');

var application = express.Router();

application.post('/vivero_orquidea/create', vivero_orquideacontroller.createVivero_orquidea);

application.put('/vivero_orquidea/edit', vivero_orquideacontroller.updateVivero_orquidea);

application.delete('/vivero_orquidea/delete', vivero_orquideacontroller.deleteVivero_orquidea);

application.get('/vivero_orquidea/all', vivero_orquideacontroller.findAllVivero_orquidea);

application.get('/vivero_orquidea/:id', vivero_orquideacontroller.findByIdVivero_orquidea);

module.exports = application;
