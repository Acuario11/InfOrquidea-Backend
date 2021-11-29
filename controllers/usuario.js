'use strict'

var Usuario = require('../models/usuario');

function createUsuario(req, resp){

    var newUsuario = new Usuario();

    var parametros = req.body;

    //Parte1-Parametros según modelo
    newUsuario.usuario = parametros.usuario;
    newUsuario.clave = parametros.clave;
    newUsuario.personaId = parametros.personaId;
    newUsuario.estado = parametros.estado;
        
    

    newUsuario.save(
        (err, usuarioCreada) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear la usuario."});
            }
            else{
                resp.status(200).send({savedUsuario: usuarioCreada});
            }
    });
}

function updateUsuario(req, resp){

    var parametros = req.body;

    //Parte2-Parametros según modelo para editar
    Usuario.findByIdAndUpdate(parametros._id, {
        usuario: parametros.usuario,
        clave: parametros.clave,
        personaId: parametros.personaId,
        estado: parametros.estado,
      
                        
    }, function(err, usuarioActualizada){
        if(err){
            resp.status(500).send({message: "No se pudo modificar la usuario."});
        }
        else{
            resp.status(200).send({updatedUsuario: usuarioActualizada});
        }

    }) ;


}

function deleteUsuario(req, resp){

    var parametros = req.body;

    Usuario.findByIdAndDelete(parametros._id, function(err, usuarioEliminada){
        if(err){
            resp.status(500).send({message: "No se pudo eliminar la usuario."});
        }
        else{
            resp.status(200).send({usuarioDeleted: usuarioEliminada});
        }
    }) ;

}

function findByIdUsuario(req, resp){

    Usuario.findById(req.params.id, (err, usuarioEncontrada) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a la usuario."});
        }
        else{
            resp.status(200).send({usuario: usuarioEncontrada});
        }
    });

}

function findAllUsuario(req, resp){

    Usuario.find({}, (err, usuariosEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({usuarioList: usuariosEcontradas});
        }
    });

}

module.exports = {
    createUsuario,
    updateUsuario,
    deleteUsuario,
    findByIdUsuario,
    findAllUsuario
};

