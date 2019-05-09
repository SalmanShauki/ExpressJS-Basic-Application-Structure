const mongoose = require('mongoose'); //Bring mongoose (ORM => Object Relational Mapper) into the app
const config = require('./config');

// Environment variable for Mongo DB Connection String

var dbURI = process.env.DBURI;

if(dbURI == null){

    dbURI = config.dbUri;
    
    // Create the Database Connection
    mongoose.connect(dbURI, {useNewUrlParser: true});

    // Connection Events
    // When Successfully connected
    mongoose.connection.on('connected', function(){
        console.log('Mongoose default connection open to :' + dbURI)
    });

    // If the connection throws an error
    mongoose.connection.on('error', function(err){
        console.log('Mongoose default connection error :' + err)
    });

    mongoose.connection.on('disconnected', function(){
        console.log('Mongoose default connection disconnected')
    });

    // If the Node process ends, close the mongoose connection
    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log('Mongoose default connection disconnected through app termination');
            process.exit();
        })
    }) 
}