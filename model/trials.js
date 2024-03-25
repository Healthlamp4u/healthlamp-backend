const mongoose = require('mongoose')

const TrialsSchema = new mongoose.Schema({
    userId: { type: String },
    gymId: { type: String },
    date: { type: String },
    time: { type: String },
    status: { type: String, enum: ['pending', 'approved', 'completed'] }
})

const Trials = mongoose.model('Trials', TrialsSchema)

module.exports = Trials