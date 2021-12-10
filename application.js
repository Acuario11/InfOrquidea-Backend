'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var routesAuth = require('./routes/auth');
var routesOrquidea = require('./routes/orquidea');
var routesCompra = require('./routes/compra');
var routesVivero = require('./routes/vivero');
var routesPersona = require('./routes/persona');
var routesPrecio = require('./routes/precio');
var routesRol = require('./routes/rol');
var routesUsu_rol = require('./routes/usu_rol');
var routesUsuario = require('./routes/usuario');
var routesVivero_orquidea = require('./routes/vivero_orquidea');
var routesImage = require('./routes/image');

var application = express();

application.use(bodyParser.urlencoded({extended:false}));
application.use(bodyParser.json());

application.use('/api', routesAuth);
application.use('/api', routesOrquidea);
application.use('/api', routesCompra);
application.use('/api', routesVivero);
application.use('/api', routesPersona);
application.use('/api', routesPrecio);
application.use('/api', routesRol);
application.use('/api', routesUsu_rol);
application.use('/api', routesUsuario);
application.use('/api', routesVivero_orquidea);
application.use('/api', routesImage);


application.get('/health-check', function(req, resp){
    resp.status(200).send({mensaje:"OK"});
});

module.exports = application;