// Created By Salman

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define menuItemSchema
const menuItemSchema = new Schema({
    menuItemId: {
        type: String,
        unique: true
    },
    name: {
        type: String
    },
    code: {
        type: String
    },
    type: { 
        type: String 
    },
    status: { 
        type: String,
        default: 'ACTIVE'
    },
    price: {
        type: Number
    },
    description: { 
        type: String 
    },
    discount: {
        type: Number
    },
    discountType: { 
        type: String 
    },
    imageUrls: {
        type: Array
    },
    availability : {
        type: String,
        default: 'YES'
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

// Define customMenuSchema
const customMenuSchema = new Schema({
    customMenuId: {
        type: String,
        unique: true
    },
    name: {
        type: String
    },
    code: {
        type: String
    },
    type: { 
        type: String 
    },
    status: { 
        type: String,
        default: 'ACTIVE'
    },
    description: { 
        type: String 
    },
    menuItems : [ 
        menuItemSchema
    ],
    discount: {
        type: Number
    },
    discountType: { 
        type: String 
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

// Define MenuSchema
const MenuSchema = new Schema({
    menuId: { 
        type: String, 
        unique: true 
    },
    enterpriseId: {
        type: String
    },
    customMenus: [
        customMenuSchema
    ],
    menuItems: [
        menuItemSchema
    ],
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

const menuModel = mongoose.model('menu', MenuSchema);

module.exports.menuModel = menuModel;
module.exports.customMenuSchema = customMenuSchema;

module.exports.findOneByEnterpriseId = function(id, callback){
    menuModel.findOne({ 
        enterpriseId: id 
    }).then((data) => {
        if(data){
            callback(null, data);
        }
        else {
            callback({
                error: 'No Menu found for the provided enterprise id: ' + id,
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