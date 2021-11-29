'use strict'

var Compra = require('../models/compra');

function createCompra(req, resp){

    var newCompra = new Compra();

    var parametros = req.body;

    //Parte1-parametros
    newCompra.usuarioId = parametros.usuarioId;
    newCompra.viveroId = parametros.viveroId;
    newCompra.fecha = parametros.fecha;
    newCompra.cantidad = parametros.cantidad;
    newCompra.total = parametros.total;
    newCompra.estado = parametros.estado;

    newCompra.save(
        (err, compraCreada) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear la compra."});
            }
            else{
                resp.status(200).send({savedCompra: compraCreada});
            }
    });
}

function updateCompra(req, resp){

    var parametros = req.body;

    Compra.findByIdAndUpdate(parametros._id, {
        usuarioId: parametros.usuarioId,
        viveroId: parametros.viveroId,
        fecha: parametros.fecha,
        cantidad: parametros.cantidad,
        total: parametros.total,
        estado: parametros.estado
    }, function(err, compraActualizada){
        if(err){
            resp.status(500).send({message: "No se pudo modificar la compra."});
        }
        else{
            resp.status(200).send({updatedCompra: compraActualizada});
        }

    }) ;


}

function deleteCompra(req, resp){

    var parametros = req.body;

    Compra.findByIdAndDelete(parametros._id, function(err, compraEliminada){
        if(err){
            resp.status(500).send({message: "No se pudo eliminar la compra."});
        }
        else{
            resp.status(200).send({compraDeleted: compraEliminada});
        }
    }) ;

}

function findByIdCompra(req, resp){

    Compra.findById(req.params.id, (err, compraEncontrada) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a la compra."});
        }
        else{
            resp.status(200).send({compra: compraEncontrada});
        }
    });

}

function findAllCompra(req, resp){

    Compra.find({}, (err, comprasEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({compraList: comprasEcontradas});
        }
    });

}

module.exports = {
    createCompra,
    updateCompra,
    deleteCompra,
    findByIdCompra,
    findAllCompra
};
