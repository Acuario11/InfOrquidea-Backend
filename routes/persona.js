'use strict'

var express = require('express');
var personacontroller = require('../controllers/persona');

var application = express.Router();

application.post('/persona/create', personacontroller.createPersona);

application.put('/persona/edit', personacontroller.updatePersona);

application.delete('/persona/delete', personacontroller.deletePersona);

application.get('/persona/all', personacontroller.findAllPersona);

application.get('/persona/:id', personacontroller.findByIdPersona);

module.exports = application;
