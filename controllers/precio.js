'use strict'

var Precio = require('../models/precio');

function createPrecio(req, resp){

    var newPrecio = new Precio();

    var parametros = req.body;

    //Parte1-Parametros según modelo
    newPrecio.costo = parametros.costo;
    newPrecio.estado = parametros.estado;
    
    
    newPrecio.save(
        (err, precioCreada) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear la precio."});
            }
            else{
                resp.status(200).send({savedPrecio: precioCreada});
            }
    });
}

function updatePrecio(req, resp){

    var parametros = req.body;

    //Parte2-Parametros según modelo para editar
    Precio.findByIdAndUpdate(parametros._id, {
        costo: parametros.costo,
        estado: parametros.estado,
        
      
                        
    }, function(err, precioActualizada){
        if(err){
            resp.status(500).send({message: "No se pudo modificar la precio."});
        }
        else{
            resp.status(200).send({updatedPrecio: precioActualizada});
        }

    }) ;


}

function deletePrecio(req, resp){

    var parametros = req.body;

    Precio.findByIdAndDelete(parametros._id, function(err, precioEliminada){
        if(err){
            resp.status(500).send({message: "No se pudo eliminar la precio."});
        }
        else{
            resp.status(200).send({precioDeleted: precioEliminada});
        }
    }) ;

}

function findByIdPrecio(req, resp){

    Precio.findById(req.params.id, (err, precioEncontrada) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a la precio."});
        }
        else{
            resp.status(200).send({precio: precioEncontrada});
        }
    });

}

function findAllPrecio(req, resp){

    Precio.find({}, (err, preciosEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({precioList: preciosEcontradas});
        }
    });

}

module.exports = {
    createPrecio,
    updatePrecio,
    deletePrecio,
    findByIdPrecio,
    findAllPrecio
};

