
const http = require('http');
const usersModel = require('../models/UsersModel');

module.exports.controller = function(app){
    
    app.get('/login', function(req,res){
        res.send("Hey There..!! You are on the login page now");
    })
}