'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PersonaSchema = Schema({
    foto: String,
    nombre: String,
    apellido: String,
    telefono: String,
    estado: String
});

module.exports = mongoose.model('Persona', PersonaSchema);