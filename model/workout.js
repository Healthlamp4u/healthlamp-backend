const mongoose = require("mongoose")


const sets = new mongoose.Schema({
    reps: { type: Number },
    weight: { type: Number }
})

const workouts = new mongoose.Schema({
    name: { type: String },
    sets: [sets],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    createdBy: { type: String },
    status: { type: String }
})

const workoutCategory = new mongoose.Schema({
    name: { type:String },
    workouts: [workouts],
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const WorkoutSchema = new mongoose.Schema({
    userId: { type: String },
    createdBy: { type: String },
    status: { type: String },
    workoutCategory: [workoutCategory],
    createdAt: {
        type: Date,
        default: Date.now()
    },
})

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout