const mongoose = require('mongoose')

const workSchema = new mongoose.Schema({
    company: { type: String },
    position: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    desc: { type: String },
    currentlyWorking: { type: Boolean }
})

const certificateSchema = new mongoose.Schema({
    link: { type: String },
    title: { type: String },
    description: { type: String },
    uploadedOn: { type: Date, default: Date.now() }
})

const TrainerSchema = new mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    specialization: [{ type: String }],
    email: { type: String },
    altEmail: { type: String },
    phone: { type: String },
    altPhone: { type: String },
    gender: { type: String },
    dob: { type: String },
    address: { type: String },
    profile: { type: String },
    associatedGym: { type: String },
    status: { type: String, enum: ['approved', 'pending'] },
    certificates: [certificateSchema],
    workExperience: [workSchema],
    clients: [{ type: String }],
    createdAt: { type: Date, default: Date.now() }
})

const Trainer = mongoose.model('Trainer', TrainerSchema)
module.exports = Trainer