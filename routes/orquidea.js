'use strict'

var express = require('express');
var orquideacontroller = require('../controllers/orquidea');

var application = express.Router();

application.post('/orquidea/create', orquideacontroller.createOrquidea);

application.put('/orquidea/edit', orquideacontroller.updateOrquidea);

application.delete('/orquidea/delete', orquideacontroller.deleteOrquidea);

application.get('/orquidea/all', orquideacontroller.findAllOrquidea);

application.get('/orquidea/:id', orquideacontroller.findByIdOrquidea);

module.exports = application;
