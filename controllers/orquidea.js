'use strict'

var Orquidea = require('../models/orquidea');

function createOrquidea(req, resp){

    var newOrquidea = new Orquidea();

    var parametros = req.body;

    newOrquidea.foto_o = parametros.foto_o;
    newOrquidea.nombre = parametros.nombre;
    newOrquidea.tipo = parametros.tipo;
    newOrquidea.origen = parametros.origen;
    newOrquidea.familia = parametros.familia;
    newOrquidea.especie = parametros.especie;
    newOrquidea.c_floracion = parametros.c_floracion;
    newOrquidea.ubicacion = parametros.ubicacion;
    newOrquidea.estado = parametros.estado;

    newOrquidea.save(
        (err, orquideaCreada) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear la orquidea."});
            }
            else{
                resp.status(200).send({savedOrquidea: orquideaCreada});
            }
    });
}

function updateOrquidea(req, resp){

    var parametros = req.body;

    Orquidea.findByIdAndUpdate(parametros._id, {
        foto_o: parametros.foto_o,
        nombre: parametros.nombre,
        tipo: parametros.tipo,
        origen: parametros.origen,
        familia: parametros.familia,
        especie: parametros.especie,
        c_floracion: parametros.c_floracion,
        ubicacion: parametros.ubicacion,
        estado: parametros.estado
    }, function(err, orquideaActualizada){
        if(err){
            resp.status(500).send({message: "No se pudo modificar la orquidea."});
        }
        else{
            resp.status(200).send({updatedOrquidea: orquideaActualizada});
        }

    }) ;


}

function deleteOrquidea(req, resp){

    var parametros = req.body;

    Orquidea.findByIdAndDelete(parametros._id, function(err, orquideaEliminada){
        if(err){
            resp.status(500).send({message: "No se pudo eliminar la orquidea."});
        }
        else{
            resp.status(200).send({orquideaDeleted: orquideaEliminada});
        }
    }) ;

}

function findByIdOrquidea(req, resp){

    Orquidea.findById(req.params.id, (err, orquideaEncontrada) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a la orquidea."});
        }
        else{
            resp.status(200).send({orquidea: orquideaEncontrada});
        }
    });

}

function findAllOrquidea(req, resp){

    Orquidea.find({}, (err, orquideasEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({orquideaList: orquideasEcontradas});
        }
    });

}

module.exports = {
    createOrquidea,
    updateOrquidea,
    deleteOrquidea,
    findByIdOrquidea,
    findAllOrquidea
};
