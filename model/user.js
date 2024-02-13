const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    data: { type: Number },
    date: { type: Date, default: Date.now() }
});

const UserSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    profile: { type: String },
    gender: {type: String},
    email: { type: String },
    dob: { type: String },
    phoneNumber: { type: String },
    alternatePhoneNumber: { type: String },
    height: { type: Number },
    weight: { type: Number },
    address: { type: String },
    medicalHistory: [{ type: String }],
    approved: { type: Boolean, default: false },
    waterIntake: {
        type: [DataSchema],
    },
    running: {
        type: [DataSchema],
    },
    createdAt: { type: Date, default: Date.now() }
});

// function arrayLimit(val) {
//     return val.length <= 7;
// }

const User = mongoose.model('User', UserSchema);
module.exports = User;
