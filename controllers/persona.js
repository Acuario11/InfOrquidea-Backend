'use strict'

var Persona = require('../models/persona');

function createPersona(req, resp){

    var newPersona = new Persona();

    var parametros = req.body;

    //Parte1-Parametros según modelo
    newPersona.foto = parametros.foto;
    newPersona.nombre = parametros.nombre;
    newPersona.apellido = parametros.apellido;
    newPersona.telefono = parametros.telefono;
    newPersona.estado = parametros.estado;
    
    

    newPersona.save(
        (err, personaCreada) => {
            if(err){
                resp.status(500).send({message: "No se pudo crear la persona."});
            }
            else{
                resp.status(200).send({savedPersona: personaCreada});
            }
    });
}

function updatePersona(req, resp){

    var parametros = req.body;

    //Parte2-Parametros según modelo para editar
    Persona.findByIdAndUpdate(parametros._id, {
        foto: parametros.foto,
        nombre: parametros.nombre,
        apellido: parametros.apellido,
        telefono: parametros.telefono,
        estado: parametros.estado,
      
                        
    }, function(err, personaActualizada){
        if(err){
            resp.status(500).send({message: "No se pudo modificar la persona."});
        }
        else{
            resp.status(200).send({updatedPersona: personaActualizada});
        }

    }) ;


}

function deletePersona(req, resp){

    var parametros = req.body;

    Persona.findByIdAndDelete(parametros._id, function(err, personaEliminada){
        if(err){
            resp.status(500).send({message: "No se pudo eliminar la persona."});
        }
        else{
            resp.status(200).send({personaDeleted: personaEliminada});
        }
    }) ;

}

function findByIdPersona(req, resp){

    Persona.findById(req.params.id, (err, personaEncontrada) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar a la persona."});
        }
        else{
            resp.status(200).send({persona: personaEncontrada});
        }
    });

}

function findAllPersona(req, resp){

    Persona.find({}, (err, personasEcontradas) => {
        if(err){
            resp.status(500).send({message: "No se pudo consultar los contactos"});
        }
        else{
            resp.status(200).send({personaList: personasEcontradas});
        }
    });

}

module.exports = {
    createPersona,
    updatePersona,
    deletePersona,
    findByIdPersona,
    findAllPersona
};

