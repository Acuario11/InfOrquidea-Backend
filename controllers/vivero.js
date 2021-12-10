'use strict'

var Vivero = require('../models/vivero');

function createVivero(req, resp){

    var newVivero = new Vivero();

    var parametros = req.body;

    //Parte1-Parametros según modelo
    newVivero.usuarioId = parametros.usuarioId;
    newVivero.foto_v = parametros.foto_v;
    newVivero.nombre = parametros.nombre;
    newVivero.tipo = parametros.tipo;
    newVivero.distrito = parametros.distrito;
    newVivero.provincia = parametros.provincia;
    newVivero.region = parametros.region;
    newVivero.direccion = parametros.direccion;
    newVivero.telefono = parametros.telefono;
    newVivero.latitud = parametros.latitud;
    newVivero.longitud = parametros.longitud;
    newVivero.estado = parametros.estado;
    

    newVivero.save(
        (err, viveroCreada) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear la vivero."});
            }
            else{
                resp.status(200).send({savedVivero: viveroCreada});
            }
    });
}

function updateVivero(req, resp){

    var parametros = req.body;

    //Parte2-Parametros según modelo para editar
    Vivero.findByIdAndUpdate(parametros._id, {
        usuarioId: parametros.usuarioId,
        foto_v: parametros.foto_v,
        nombre: parametros.nombre,
        tipo: parametros.tipo,
        distrito: parametros.distrito,
        provincia: parametros.provincia,
        region: parametros.region,
        direccion: parametros.direccion,
        telefono: parametros.telefono,
        latitud: parametros.latitud,
        longitud: parametros.longitud,
        estado: parametros.estado
                        
    }, function(err, viveroActualizada){
        if(err){
            resp.status(500).send({message: "No se pudo modificar la vivero."});
        }
        else{
            resp.status(200).send({updatedVivero: viveroActualizada});
        }

    }) ;


}

function deleteVivero(req, resp){

    var parametros = req.body;

    Vivero.findByIdAndDelete(parametros._id, function(err, viveroEliminada){
        if(err){
            resp.status(500).send({message: "No se pudo eliminar la vivero."});
        }
        else{
            resp.status(200).send({viveroDeleted: viveroEliminada});
        }
    }) ;

}

function findByIdVivero(req, resp){

    Vivero.findById(req.params.id, (err, viveroEncontrada) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a la vivero."});
        }
        else{
            resp.status(200).send({vivero: viveroEncontrada});
        }
    });

}

function findAllVivero(req, resp){

    Vivero.find({}, (err, viverosEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({viveroList: viverosEcontradas});
        }
    });

}

module.exports = {
    createVivero,
    updateVivero,
    deleteVivero,
    findByIdVivero,
    findAllVivero
};
