// Created By Salman 01/05/2019  dd/mm/yyyy

const mongoose = require('mongoose');

// Define Schema
const UsersSchema = new mongoose.Schema({
    userId: { 
        type: String, 
        unique: true 
    },
    userName: { 
        type: String 
    },
    password: { 
        type: String 
    },
    name: { 
        type: String 
    },
    dateOfBirth: { 
        type: String 
    },
    gender: { 
        type: String 
    },
    email: { 
        type: String 
    },
    contactNumber: { 
        type: String 
    },
    adress: { 
        type: String 
    },
    userType: { 
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

module.exports = mongoose.model('User', UsersSchema, 'Users');

const userModel = mongoose.model('User', UsersSchema, 'Users');

module.exports.findUserByUserId = function(userId, callback){
    userModel.findOne({ 
        userId: userId 
    }, function(err, userFromRepo){
        if(err){
            callback({
                message: err,
                 code: 500
                }, null)
        }
        else{
            if(userFromRepo){
                callback(null, userFromRepo)
            }
            else{
                callback({
                    message: "User not found", 
                    code: 404
                }, null);
            }
        }
    });
}