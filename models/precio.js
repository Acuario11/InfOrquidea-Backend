'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PrecioSchema = Schema({
    costo: Number,
    estado: String
});

module.exports = mongoose.model('Precio', PrecioSchema);