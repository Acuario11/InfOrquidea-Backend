'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ViveroSchema = Schema({
    usuarioId: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    foto_v: String,
    nombre: String,
    tipo: String,
    distrito: String,
    provincia: String,
    region: String,
    direccion: String,
    telefono: String,
    estado: String
});

module.exports = mongoose.model('Vivero', ViveroSchema);