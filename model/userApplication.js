const mongoose = require('mongoose')

const UserApplicationSchema = new mongoose.Schema({
    userId: { type: String },
    gymId: { type: String },
    status: { type: String },
    appliedOn: { type: Date, default: Date.now() },
    pricing: {}
})

const userApplication = mongoose.model('userApplication', UserApplicationSchema)
module.exports = userApplication
