'use strict'

var Usu_rol = require('../models/usu_rol');

function createUsu_rol(req, resp){

    var newUsu_rol = new Usu_rol();

    var parametros = req.body;

    //Parte1-Parametros según modelo
    newUsu_rol.usuarioId = parametros.usuarioId;
    newUsu_rol.rolId = parametros.rolId;
    newUsu_rol.estado = parametros.estado;
    
    

    newUsu_rol.save(
        (err, usu_rolCreada) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear la usu_rol."});
            }
            else{
                resp.status(200).send({savedUsu_rol: usu_rolCreada});
            }
    });
}

function updateUsu_rol(req, resp){

    var parametros = req.body;

    //Parte2-Parametros según modelo para editar
    Usu_rol.findByIdAndUpdate(parametros._id, {
        usuarioId: parametros.usuarioId,
        rolId: parametros.rolId,
        estado: parametros.estado,
        
      
                        
    }, function(err, usu_rolActualizada){
        if(err){
            resp.status(500).send({message: "No se pudo modificar la usu_rol."});
        }
        else{
            resp.status(200).send({updatedUsu_rol: usu_rolActualizada});
        }

    }) ;


}

function deleteUsu_rol(req, resp){

    var parametros = req.body;

    Usu_rol.findByIdAndDelete(parametros._id, function(err, usu_rolEliminada){
        if(err){
            resp.status(500).send({message: "No se pudo eliminar la usu_rol."});
        }
        else{
            resp.status(200).send({usu_rolDeleted: usu_rolEliminada});
        }
    }) ;

}

function findByIdUsu_rol(req, resp){

    Usu_rol.findById(req.params.id, (err, usu_rolEncontrada) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a la usu_rol."});
        }
        else{
            resp.status(200).send({usu_rol: usu_rolEncontrada});
        }
    });

}

function findAllUsu_rol(req, resp){

    Usu_rol.find({}, (err, usu_rolsEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({usu_rolList: usu_rolsEcontradas});
        }
    });

}

module.exports = {
    createUsu_rol,
    updateUsu_rol,
    deleteUsu_rol,
    findByIdUsu_rol,
    findAllUsu_rol
};

