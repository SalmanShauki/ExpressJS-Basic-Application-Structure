// Created By Salman 23/12/2019  dd/mm/yyyy

const mongoose = require('mongoose');
const MenusModel = require('./MenusModel');
const Schema = mongoose.Schema;

// Define OrderSchema
const OrderSchema = new Schema({
    orderId: { 
        type: String, 
        unique: true 
    },
    userId: {
        type: String
    },
    enterpriseId: {
        type: String
    },
    orderNumber: { 
        type: Number 
    },
    orderType: { 
        type: String 
    },
    placedOrder : [
        MenusModel.customMenuSchema
    ],
    status: {
        type: String,
        default: "ACTIVE"
    },
    createdBy: { 
        type: String 
    },
    updatedBy: { 
        type: String 
    },
    createdOn: { 
        type: Date, 
        default: Date.now 
    },
    createdOn_str: {
        type: String
    },
    updatedOn: { 
        type: Date, 
        default: Date.now 
    },
    updatedOn_str: {
        type: String
    }
});

const orderModel = mongoose.model('order', OrderSchema);

module.exports.orderModel = orderModel;

module.exports.findOneByQuery = (query, callback) => {
    orderModel.findOne(query).then((data) => {
        if(data){
            callback(null, data);
        }
        else {
            callback({
                error: 'No Order found in the database.',
                code: 404
            }, null);
        }
    }).catch((err) => {
        callback({
            error: err,
            code: 500
        }, null);
    });
}

module.exports.findAllByQuery = (query, callback) => {
    orderModel.find(query).then((data) => {
        if(data){
            callback(null, data);
        }
        else {
            callback({
                error: 'No Orders found in the database.',
                code: 404
            }, null);
        }
    }).catch((err) => {
        callback({
            error: err,
            code: 500
        }, null);
    });
}