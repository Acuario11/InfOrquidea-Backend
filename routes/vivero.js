'use strict'

var express = require('express');
var viverocontroller = require('../controllers/vivero');

var application = express.Router();

application.post('/vivero/create', viverocontroller.createVivero);

application.put('/vivero/edit', viverocontroller.updateVivero);

application.delete('/vivero/delete', viverocontroller.deleteVivero);

application.get('/vivero/all', viverocontroller.findAllVivero);

application.get('/vivero/:id', viverocontroller.findByIdVivero);

module.exports = application;
