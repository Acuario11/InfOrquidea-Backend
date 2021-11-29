'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsuRolSchema = Schema({
    usuarioId: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    rolId: {
        type: Schema.Types.ObjectId,
        ref: 'Rol'
    },
    estado: String
});

module.exports = mongoose.model('Usu_Rol', UsuRolSchema);