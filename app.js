const express = require("express");
const bodyParser = require('body-parser'); //Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const errorHandler = require('errorhandler');
const logger = require('morgan'); //HTTP request logger middleware for node.js
const helmet = require("helmet"); //Helmet helps you secure your Express apps by setting various HTTP headers
const path = require('path');
const fs = require('fs');
const methodOverride = require('method-override'); //Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
const config = require("./config/config");
const db = require("./config/db");

const app = express();

const port = config.port;

app.use(logger('dev'))
app.use(helmet())
app.use(methodOverride())
 
// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.use((err, req, res, next) => {
    if(err){
        res.status(400).send('Invalid Json data').end();
    }
    else {
        next();
    }
})

fs.readdirSync('./controllers').forEach(function(file){
    if(file.substr(-3) == '.js'){
        var router = require('./controllers/' + file)
        router.controller(app);
    }
})

// error handling middleware should be loaded after loading the routes
if (app.get('env') === 'development') {
    // only use in development
    app.use(errorHandler())
}

app.listen(port, () => console.log("App listening on port : " + port))

module.exports = app;