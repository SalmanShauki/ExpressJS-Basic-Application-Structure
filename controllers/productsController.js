
const http = require('http');
const productsModel = require('../models/ProductsModel');

module.exports.controller = function(app){
    
    app.get('/', function(req,res){
        res.send("Hey There..!! You are on the products page now");
    })
}