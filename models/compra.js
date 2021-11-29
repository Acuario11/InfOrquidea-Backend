'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CompraSchema = Schema({
    usuarioId: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    viveroId: {
        type: Schema.Types.ObjectId,
        ref: 'Vivero_Orquidea'
    },
    fecha: Date,
    cantidad: Number,
    total: Number,
    estado: String
});

module.exports = mongoose.model('Compra', CompraSchema);