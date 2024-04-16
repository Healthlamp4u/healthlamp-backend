const mongoose = require('mongoose')

const workSchema = new mongoose.Schema({
    institution: { type: String },
    position: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    currentlyWorking: { type: Boolean },
    link: { type: String }
})

const certificateSchema = new mongoose.Schema({
    link: { type: String },
    title: { type: String },
    description: { type: String },
    uploadedOn: { type: Date, default: Date.now() }
})

const aadharSchema = new mongoose.Schema({
    aadharNumber: { type: String },
    aadharFrontUrl: { type: String },
    aadharFront: { type: String },
    aadharBackUrl: { type: String },
    aadharBack: { type: String }
})

const feesSchema = new mongoose.Schema({
    type: { type: String },
    fees: { type: String },
    title: { type: String },
    description: { type: String }
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
    aadhar: aadharSchema,
    fees: [feesSchema],
    associatedGym: { type: String },
    status: { type: String, enum: ['approved', 'pending'] },
    certificates: [certificateSchema],
    workExperience: [workSchema],
    experience: { type: Number },
    clients: [{ type: String }],
    createdAt: { type: Date, default: Date.now() },
    type: { type: String }
})

const Trainer = mongoose.model('Trainer', TrainerSchema)
module.exports = Trainer