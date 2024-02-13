const Workout = require("../model/workout")

const workoutService = {
    fetchAll: async (userId) => {
        const workoutResponse = await Workout.find({ userId }).sort({ createdAt: -1 })
        return workoutResponse
    },
    fetchToday: async (userId) => {
        // Get the current date
        const currentDate = new Date();
    
        // Set the start and end of the current day
        const startOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0);
        const endOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 59, 59);
        const workoutResponse = await Workout.findOne({ userId, createdAt: { $gte: startOfDay, $lte: endOfDay } }).sort({ createdAt: -1 });
        return workoutResponse;
    },    
    fetchSingleWorkout: async (workoutId) => {
        const workoutResponse = await Workout.findOne({ _id: workoutId })
        return workoutResponse
    },
    createWorkout: async (payload) => {
        const newWorkout = new Workout(payload)
        const workoutResponse = await newWorkout.save()
        return workoutResponse
    },
    updateWorkout: async (id, payload) => {
        const workoutResponse = await Workout.updateOne({_id: id}, { $set: payload });
        return workoutResponse
    },
    deleteWorkout: async (workoutId) => {
        const workoutResponse = await Workout.findByIdAndDelete({ _id: workoutId })
        return workoutResponse
    }
}

module.exports = workoutService