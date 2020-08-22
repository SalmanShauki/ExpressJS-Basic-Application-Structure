const assert = require('assert');
const UsersModel = require('../models/UsersModel');

// Describe Mocha Tests
// describe('some demo test', () => {
//     // Create Tests
//     it('adds 2 numbers together', () => {
//         assert(2+2 === 4);
//     });

// });

// Describe Mocha Tests
// describe('Finding records', () => {

//     // Runs before each below test
//     beforeEach((done) => {
//         let user = new UsersModel({
//             userId : 'asd7657asdasdgasdasd786',
//             userName : 'Salman'
//         });

//         user.save().then(() => {
//             done();
//         }).catch((err) => {
//             done();
//         })
//     });

// //     // Create Tests
// //     it('Find one record from a database', (done) => {

// //         UsersModel.findOne({ userName : 'Salman' }).then((data) => {
// //             assert(data != null || data != '')
// //             done();
// //         }).catch((err) => {
// //             done();
// //         })
// //     });

// });