
const http = require('http');
const Logger = require('../utilities/Logger');

const EnterprisesModel = require('../models/EnterprisesModel');

module.exports.AuthenticateEnterpriseAndUser = (req, res, next) => {
    console.log("Authenticating Enterprise User.");
    next();
};