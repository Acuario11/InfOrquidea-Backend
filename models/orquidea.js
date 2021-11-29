'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrquideaSchema = Schema({
    foto_o: String,
    nombre: String,
    tipo: String,
    origen: String,
    familia: String,
    especie: String,
    c_floracion: String,
    ubicacion: String,
    estado: String
});

module.exports = mongoose.model('Orquidea', OrquideaSchema);