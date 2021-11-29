'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
    usuario: String,
    clave: String,
    personaId: {
        type: Schema.Types.ObjectId,
        ref: 'Persona'
    },
    estado: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
