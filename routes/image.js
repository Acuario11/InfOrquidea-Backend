'use strict'

var express = require('express');

var application = express.Router();

var fileupload = require('express-fileupload');

application.use(fileupload({useTempFiles: true}));

var cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'upeu',
    api_key: '931652731689369',
    api_secret: '9Vu-9JlDOsq1HkeW_y82l9uEMAk'
});

application.post('/image/upload', function(req, res, next){
    const file = req.files.photo;
    console.log(file);
    cloudinary.uploader.upload(file.tempFilePath, function(err, result){
        console.log("Error: ", err);
        console.log("Result: ", result);
        res.status(200).send({"Result":result.url});
    })
});

module.exports = application;