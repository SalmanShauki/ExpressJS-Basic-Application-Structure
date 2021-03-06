const mongoose = require('mongoose'); //Bring mongoose (ODM => Object Document Mapper) into the app
const config = require('./config');

// Environment variable for Mongo DB Connection String

let dbURI = process.env.DBURI;
// ES6 Promises Replacing the Mongoose Promise as it's been deprecated
mongoose.Promise = global.Promise;

if (dbURI === null || dbURI === undefined || dbURI === '') {

    dbURI = config.dbUri;

    // Create the Database Connection
    mongoose.connect(dbURI, { useNewUrlParser: true });

    // Connection Events
    // When Successfully connected
    mongoose.connection.on('connected', function () {
        console.log('Mongoose default connection open to : ' + dbURI);
    });

    // If the connection throws an error
    mongoose.connection.on('error', function (err) {
        console.log('Mongoose default connection error : ' + err);
    });

    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
    });

    // If the Node process ends, close the mongoose connection
    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Mongoose default connection disconnected through app termination');
            process.exit();
        });
    });
}
else {

    // Create the Database Connection
    mongoose.connect(dbURI, { useNewUrlParser: true });

    // Connection Events
    // When Successfully connected
    mongoose.connection.on('connected', function () {
        console.log('Mongoose default connection open to :' + dbURI);
    });

    // If the connection throws an error
    mongoose.connection.on('error', function (err) {
        console.log('Mongoose default connection error :' + err);
    });

    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
    });

    // If the Node process ends, close the mongoose connection
    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Mongoose default connection disconnected through app termination');
            process.exit();
        });
    });
}