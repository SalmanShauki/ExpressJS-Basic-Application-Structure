// Created By Salman 23/12/2019  dd/mm/yyyy

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define NotificationSchema
const NotificationSchema = new Schema({
    notificationId: { 
        type: String, 
        unique: true 
    },
    type: {
        type: String
    },
    description: {
        type: String
    },
    status: {
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

// Define UserSchema
const UserSchema = new Schema({
    userId: { 
        type: String, 
        unique: true 
    },
    userType: { 
        type: String 
    },
    userName: { 
        type: String 
    },
    password: { 
        type: String 
    },
    passwordSalt: { 
        type: String 
    },
    name: { 
        type: String 
    },
    email: { 
        type: String 
    },
    phone: { 
        type: String 
    },
    mobile: { 
        type: String 
    },
    adress: { 
        type: String 
    },
    imageUri: { 
        type: String 
    },
    status: {
        type: String,
        default: "ACTIVE"
    },
    notifications: [
        NotificationSchema
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

// Define EnterpriseSchema
const EnterpriseSchema = new Schema({
    enterpriseId: { 
        type: String, 
        unique: true 
    },
    name: {
        type: String
    },
    type: {
        type: String
    },
    status: {
        type: String,
        default: "ACTIVE"
    },
    users : [
        UserSchema
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

const enterpriseModel = mongoose.model('enterprise', EnterpriseSchema);

module.exports.enterpriseModel = enterpriseModel;

module.exports.findOneByQuery = (query, callback) => {
    enterpriseModel.findOne(query).then((data) => {
        if(data){
            callback(null, data);
        }
        else {
            callback({
                error: 'No Enterprise found in the database.',
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
    enterpriseModel.find(query).then((data) => {
        if(data){
            callback(null, data);
        }
        else {
            callback({
                error: 'No Enterprises found in the database.',
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