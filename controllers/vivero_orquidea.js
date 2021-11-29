'use strict'

var Vivero_orquidea = require('../models/vivero_orquidea');

function createVivero_orquidea(req, resp){

    var newVivero_orquidea = new Vivero_orquidea();

    var parametros = req.body;

    //Parte1-Parametros según modelo
    newVivero_orquidea.precioId = parametros.precioId;
    newVivero_orquidea.viveroId = parametros.viveroId;
    newVivero_orquidea.orquideaId = parametros.orquideaId;
    newVivero_orquidea.estado = parametros.estado;
    
    

    newVivero_orquidea.save(
        (err, vivero_orquideaCreada) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear la vivero_orquidea."});
            }
            else{
                resp.status(200).send({savedVivero_orquidea: vivero_orquideaCreada});
            }
    });
}

function updateVivero_orquidea(req, resp){

    var parametros = req.body;

    //Parte2-Parametros según modelo para editar
    Vivero_orquidea.findByIdAndUpdate(parametros._id, {
        precioId: parametros.precioId,
        viveroId: parametros.viveroId,
        orquideaId: parametros.orquideaId,
        estado: parametros.estado,
      
                        
    }, function(err, vivero_orquideaActualizada){
        if(err){
            resp.status(500).send({message: "No se pudo modificar la vivero_orquidea."});
        }
        else{
            resp.status(200).send({updatedVivero_orquidea: vivero_orquideaActualizada});
        }

    }) ;


}

function deleteVivero_orquidea(req, resp){

    var parametros = req.body;

    Vivero_orquidea.findByIdAndDelete(parametros._id, function(err, vivero_orquideaEliminada){
        if(err){
            resp.status(500).send({message: "No se pudo eliminar la vivero_orquidea."});
        }
        else{
            resp.status(200).send({vivero_orquideaDeleted: vivero_orquideaEliminada});
        }
    }) ;

}

function findByIdVivero_orquidea(req, resp){

    Vivero_orquidea.findById(req.params.id, (err, vivero_orquideaEncontrada) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a la vivero_orquidea."});
        }
        else{
            resp.status(200).send({vivero_orquidea: vivero_orquideaEncontrada});
        }
    });

}

function findAllVivero_orquidea(req, resp){

    Vivero_orquidea.find({}, (err, vivero_orquideasEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({vivero_orquideaList: vivero_orquideasEcontradas});
        }
    });

}

module.exports = {
    createVivero_orquidea,
    updateVivero_orquidea,
    deleteVivero_orquidea,
    findByIdVivero_orquidea,
    findAllVivero_orquidea
};

