'use strict'

var moongose = require('mongoose');
var application = require('./application');

moongose.connect('mongodb://localhost:27017/InfOrquidea', (err, res) =>{
    if(err){
        console.log('Se ha presentado un error al conectarse a la BBDD');
    }
    else{
        console.log('Se ha conectado con la BBDD correctamente');

        application.listen(8283, function(){
            console.log("El servidor web se ha iniciado correctamente");
        });

    }

});