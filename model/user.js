const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    data: { type: Number },
    date: { type: Date, default: Date.now() }
});

const ImageSchema = new mongoose.Schema({
    imageUrl: { type: String },
    title: { type: String },
})

const GallerySchema = new mongoose.Schema({
    date: { type: Date, default: Date.now() },
    image: [ImageSchema]
})

const reports = new mongoose.Schema({
    uploadedOn: { type: Date, default: Date.now() },
    title: { type: String },
    fileName: { type: String },
    fileUrl: { type: String }
})

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
    biceps: { type: Number },
    thighs: { type: Number },
    waist: { type: Number },
    shoulder: { type: Number },
    chest: { type: Number }, 
    address: { type: String },
    gallery: { type: [GallerySchema] },
    medicalHistory: [{ type: String }],
    approved: { type: Boolean, default: false },
    waterIntake: { type: [DataSchema] },
    running: { type: [DataSchema] },
    labReports: { type: [reports] },
    createdAt: { type: Date, default: Date.now() },
    type: { type: String }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
