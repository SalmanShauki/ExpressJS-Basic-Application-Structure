// Created By Salman

const mongoose = require('mongoose');

// Define Schema
const ProductsSchema = new mongoose.Schema({
    productId: { 
        type: String, 
        unique: true 
    },
    productName: { 
        type: String 
    },
    productType: { 
        type: String 
    },
    status: {
        type: String,
        default: "ACTIVE"
    },
    createdBy: { 
        type: String 
    },
    createdOn: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Product', ProductsSchema, 'Products');

const productModel = mongoose.model('Product', ProductsSchema, 'Products');

module.exports.findProductByProductId = function(productId, callback){
    productModel.findOne({ 
        productId: productId 
    }, function(err, productFromRepo){
        if(err){
            callback({
                message: err, 
                code: 500
            }, null)
        }
        else{
            if(productFromRepo){
                callback(null, productFromRepo)
            }
            else{
                callback({
                    message: "Product not found", 
                    code: 404
                }, null);
            }
        }
    });
}