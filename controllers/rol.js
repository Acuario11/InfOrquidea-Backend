'use strict'

var Rol = require('../models/rol');

function createRol(req, resp){

    var newRol = new Rol();

    var parametros = req.body;

    //Parte1-Parametros según modelo
    newRol.nombre = parametros.nombre;
    newRol.estado = parametros.estado;
        
    

    newRol.save(
        (err, rolCreada) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear la rol."});
            }
            else{
                resp.status(200).send({savedRol: rolCreada});
            }
    });
}

function updateRol(req, resp){

    var parametros = req.body;

    //Parte2-Parametros según modelo para editar
    Rol.findByIdAndUpdate(parametros._id, {
        nombre: parametros.nombre,
        estado: parametros.estado,
        
      
                        
    }, function(err, rolActualizada){
        if(err){
            resp.status(500).send({message: "No se pudo modificar la rol."});
        }
        else{
            resp.status(200).send({updatedRol: rolActualizada});
        }

    }) ;


}

function deleteRol(req, resp){

    var parametros = req.body;

    Rol.findByIdAndDelete(parametros._id, function(err, rolEliminada){
        if(err){
            resp.status(500).send({message: "No se pudo eliminar la rol."});
        }
        else{
            resp.status(200).send({rolDeleted: rolEliminada});
        }
    }) ;

}

function findByIdRol(req, resp){

    Rol.findById(req.params.id, (err, rolEncontrada) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a la rol."});
        }
        else{
            resp.status(200).send({rol: rolEncontrada});
        }
    });

}

function findAllRol(req, resp){

    Rol.find({}, (err, rolsEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({rolList: rolsEcontradas});
        }
    });

}

module.exports = {
    createRol,
    updateRol,
    deleteRol,
    findByIdRol,
    findAllRol
};

