const EnterprisesModel = require('../models/EnterprisesModel');
const Logger = require('./Logger');
const utils = require('./utils');
const crypto = require('crypto');

module.exports.init = EnterprisesModel.findOneByQuery({}, (err, data) => {

    let currentDate = new Date();

    if (err) {
        if (err.code === 404) {
            Logger.log('info', 'Creating a Master Enterprise if no other enterprise exists in the System.');

            const password = 'asdf@123';

            const enterpriseId = utils.randomGUID() + utils.randomGUID();
            const userId = utils.randomGUID() + utils.randomGUID();

            // Creating a random string for hashing
            crypto.randomBytes(128, (err, salt) => {
                if (err) {
                    Logger.log('info', 'Unable to create a salt for user initialization.');
                }
                else {
                    // returns a buffer, so converting to string
                    salt = new Buffer(salt).toString('hex');
                    // Hashing Password
                    crypto.pbkdf2(password, salt, 7000, 256, 'sha256', (err, hash) => {
                        if (err) {
                            Logger.log('info', 'Unable to hash the password for user initialization.');
                        }
                        else {
                            // returns a buffer, so converting to string
                            let hashedPassword = new Buffer(hash).toString('hex');

                            let enterpriseData = {
                                enterpriseId: enterpriseId,
                                name: 'Master',
                                type: 'RESTAURANT',
                                status: 'ACTIVE',
                                users: [{
                                    userId: userId,
                                    userType: 'MANAGER',
                                    userName: 'admin',
                                    password: hashedPassword,
                                    passwordSalt: salt,
                                    name: 'Test User',
                                    email: 'salmanshaukat373@gmail.com',
                                    phone: '0501537087',
                                    mobile: '0501537087',
                                    adress: 'Port Saeed, Deira',
                                    imageUri: '',
                                    status: 'ACTIVE',
                                    createdBy: 'DIRECT_INIT',
                                    updatedBy: null,
                                    createdOn: currentDate,
                                    createdOn_str: utils.dateToString(currentDate),
                                    updatedOn: null,
                                    updatedOn_str: null
                                }],
                                createdBy: 'DIRECT_INIT',
                                updatedBy: null,
                                createdOn: currentDate,
                                createdOn_str: utils.dateToString(currentDate),
                                updatedOn: null,
                                updatedOn_str: null
                            };

                            let enterpriseUser = new EnterprisesModel.enterpriseModel(enterpriseData);

                            enterpriseUser.save().then(() => {
                                Logger.log('info', 'Master Enterprise Successfully created in the system.');
                            }).catch((err) => {
                                Logger.log('error', 'Unable to add a Master Enterprise in the system.');
                                Logger.log('error', err);
                            });
                        }
                    });
                }
            });
        }
        else {
            Logger.log('error', 'Error in creating a Master Enterprise in the System.');
        }
    }
    else {
        Logger.log('info', 'Master Enterprise already exists in the System.');
    }
});