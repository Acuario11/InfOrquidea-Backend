'use strict'

var express = require('express');
var rolcontroller = require('../controllers/rol');

var application = express.Router();

application.post('/rol/create', rolcontroller.createRol);

application.put('/rol/edit', rolcontroller.updateRol);

application.delete('/rol/delete', rolcontroller.deleteRol);

application.get('/rol/all', rolcontroller.findAllRol);

application.get('/rol/:id', rolcontroller.findByIdRol);

module.exports = application;
