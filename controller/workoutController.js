const workoutService = require("../services/workoutService")

const workoutController = {

    fetchAllWorkouts: async (req, res) => {
        try {
            const userId = req.params.userId
            const workout = await workoutService.fetchAll(userId)

            return res.status(200).json(workout)
        } catch (err) {
            return res.status(500).json(err)
        }
    },

    fetchTodaysWorkouts: async (req, res) => {
        try {
            const userId = req.body.userId
            const workout = await workoutService.fetchToday(userId)

            return res.status(200).json(workout)
        } catch (err) {
            return res.status(500).json(err)
        }
    },

    fetchWorkoutById: async (req, res) => {
        try {
            const { workoutCategoryId, userId } = req.body;

            const userWorkout = await workoutService.fetchToday(userId);
            const workoutCategory = userWorkout.workoutCategory.find(workoutCategory => JSON.stringify(workoutCategory._id).replace(/"/g, "") === workoutCategoryId)
            if (!workoutCategory) return res.status(404).json({ message: "Workout not found" })
            return res.json(workoutCategory)

        } catch (err) {
            console.error('Error fetching workout by ID:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
    },

    fetchPreviousWorkoutByName: async (req, res) => {
        const { name, userId } = req.body;

        console.log({ name, userId })

        try {
            const userWorkout = await workoutService.fetchAll(userId);
            const workoutCategory = userWorkout
                .map(user => user.workoutCategory
                    .find(workoutCategory => workoutCategory.name === name))

            if (!workoutCategory[1]) return res.status(200).json({ status: false, message: "Document doesn't exist" })
            return res.status(200).json({ status: true, payload: workoutCategory[1] })

        } catch (err) {
            console.error('Error fetching workouts:', err);
            return res.status(500).json({ status: false, message: 'Internal server error' });
        }
    },

    createWorkout: async (req, res) => {
        try {
            const workout = req.body
            const workoutResponse = await workoutService.createWorkout(workout)

            if (!workoutResponse) return res.status(400).json({ message: "Error in creating workout" })
            return res.status(200).json(workoutResponse)

        } catch (err) {
            return res.status(500).json(err)
        }
    },
    updateWorkout: async (req, res) => {
        try {
            const payload = req.body.payload
            const id = payload._id

            const result = await workoutService.updateWorkout(id, payload)

            if (result.nModified === 0) {
                throw new Error('Workout not found or document not modified');
            }

            return res.status(200).json(payload);

        } catch (err) {
            console.log(err)
            return res.status(500).json(err)
        }
    },
    deleteWorkout: async (req, res) => {
        try {
            // const id = req.body.id
            const id = req.params.id
            const workoutResponse = await workoutService.deleteWorkout(id)

            if (!workoutResponse) return res.status(400).json({ message: "Error in deleting document" })
            return res.status(200).json({ message: "Document deleted successfully" })

        } catch (err) {
            return res.status(500).json(err)
        }
    }

}

module.exports = workoutController