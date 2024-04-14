const mongoose = require('mongoose')

const GymApplicationSchema = new mongoose.Schema({
    gymId: { type: String },
    trainerId: { type: String },
    status: { type: String },
    appliedOn: { type: Date, default: Date.now() },
})

const GymApplication = mongoose.model('GymApplication', GymApplicationSchema)
module.exports = GymApplication