'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ViveroOrquideaSchema = Schema({
    precioId: {
        type: Schema.Types.ObjectId,
        ref: 'Precio'
    },
    viveroId: {
        type: Schema.Types.ObjectId,
        ref: 'Vivero'
    },
    orquideaId: {
        type: Schema.Types.ObjectId,
        ref: 'Orquidea'
    },
    estado: String
});

module.exports = mongoose.model('Vivero_Orquidea', ViveroOrquideaSchema);