'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RolSchema = Schema({
    nombre: String,
    estado: String
});

module.exports = mongoose.model('Rol', RolSchema);