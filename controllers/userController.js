const http = require('http');
const Logger = require('../utilities/Logger');
const gatekeeper = require('../gatekeeper/gatekeeper');

const EnterprisesModel = require('../models/EnterprisesModel');
const MenusModel = require('../models/MenusModel');
const OrdersModel = require('../models/OrdersModel');
const utils = require('../utilities/utils')
const httpHelper = require('../utilities/httpHelpers')

module.exports.controller = function (app) {

    app.get('/', gatekeeper.AuthenticateEnterpriseAndUser, (req, res) => {
        res.send("Hey There..!! You are on the user controller now");
    })
}